import React, { useState, createContext,useEffect } from 'react';
import { storeProducts, detailProduct } from '../data';

export const ProductContext = createContext();

const ProductProvider = (props) => {
	const [products, setProducts] = useState([]);
	const [productDetails, setProductDetails] = useState(detailProduct);


	const setProductItems=()=>{
		let tempProducts = [];
		storeProducts.forEach(item=>{
			let singleItem = {...item};
			tempProducts = [...tempProducts,singleItem];
		})
		setProducts(tempProducts)
	}

	useEffect(()=>{
		setProductItems();
	},[])

	const handleDetails = () => {
		console.log('handleDetails');
	};
	const addToCart = (id) => {
		console.log('from add to card with id ',id);
	};

	return (
		<ProductContext.Provider
			value={{
				products,
				setProducts,
				productDetails,
				setProductDetails,
				handleDetails,
				addToCart,
			}}
		>
			{props.children}
		</ProductContext.Provider>
	);
};

export default ProductProvider;
