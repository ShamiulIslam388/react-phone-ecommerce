import React, { useContext } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductContext } from '../contexts/ProductContexts';

function ProductList() {
	const { products } = useContext(ProductContext);
	console.log(products);
	return (
		<React.Fragment>
			<div className="py-5">
				<div className="container">
					<Title name="our" title="products" />
					<div className="row">
						{products.map((product) => (
							<Product key={product.id} {...product} />
						))}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default ProductList;
