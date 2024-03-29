import React, { Component } from 'react';//context  is renamed as productProvider
import {storeProducts, detailProduct} from './data';


const ProductContext = React.createContext();// this method is comes with two componrnts i.e provider   and   consumer



class ProductProvider extends Component {


state= {
	products: [] ,
	detailProduct:detailProduct,
	modalOpen:true,
	modalProduct:detailProduct,
}
componentDidMount(){
	this.setProducts();
}

setProducts = () => {
	let tempProducts = [];
	storeProducts.forEach(item =>{
		const singleItem = {...item};
		tempProducts = [...tempProducts,singleItem]//need to understand
	});
	this.setState( () =>{
		return { products: tempProducts};
	});
};

getItem = (id) =>{
    const product = this.state.products.find(item => item.id ===id);
    return product;
  };


 handleDetail = (id) =>{
    const product = this.getItem(id);
    this.setState(()=>{
        return{detailProduct:product};
    })  
  };

addToCart = (id) =>{
    let tempproducts = [...this.state.products];
    const index = tempproducts.indexOf(this.getItem(id));
    const product = tempproducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(()=>{
    return {products:tempproducts, cart:[...this.state.cart,product]};
   }, ()=>{
       this.addTotals();
   });
  };

  openModal = id =>{
      const product = this.getItem(id);
      this.setState(()=>{
          return {modalProduct:product,modalOpen:true}   
      })
  };
  closeModal = () => {
      this.setState(()=>{
          return {modalOpen:false}
      })
  };

render() {
      return( 
          <ProductContext.Provider  value = {{
          	...this.state  ,//we doing this  , we are  getting all the properties with their values.
          	handleDetail:this.handleDetail,
          	addToCart:this.addToCart,
          	openModal:this.openModal,
          	closeModal:this.closeModal,
          }}>

          {this.props.children}
          </ProductContext.Provider>

	   );
        
  }
}
const ProductConsumer = ProductContext.Consumer;
export {ProductProvider , ProductConsumer} ;