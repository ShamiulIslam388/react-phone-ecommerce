import React, { useState, createContext } from 'react';
import { storeProducts, detailProduct } from '../data';

export const ProductContext = createContext();

const ProductProvider = (props) => {
	const [products, setProducts] = useState(storeProducts);
	const [productDetails, setProductDetails] = useState(detailProduct);

	const handleDetails = () => {
		console.log('handleDetails');
	};
	const addToCart = () => {
		console.log('addToCart');
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
