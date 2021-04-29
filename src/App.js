import React from 'react';
import { Switch, Route } from 'react-router-dom';

//design section
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//material-icon section

//component import section with
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<Switch>
				<Route exact path="/" component={ProductList} />
				<Route path="/details" component={Details} />
				<Route path="/store" component={Cart} />
				<Route component={Default} />
			</Switch>
		</React.Fragment>
	);
}

export default App;
