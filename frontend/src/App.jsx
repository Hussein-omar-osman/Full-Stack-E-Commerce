import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Shop from './pages/Shop';
import Error from './pages/Error';
import Orders from './pages/Orders';
import Layout from './utils/Layout';
import Profile from './pages/Profile';
import { Spinner } from './components';
import Favorites from './pages/Favorites';

import AllProducts from './pages/AllProducts';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductPage from './pages/ProductPage';
import SingleCategory from './pages/SingleCategory';

const HomePage = React.lazy(() => import('./pages/Home'));
const CartPage = React.lazy(() => import('./pages/Cart'));
const SearchPage = React.lazy(() => import('./pages/Search'));
const BillingPage = React.lazy(() => import('./pages/Billing'));
const ShippingPage = React.lazy(() => import('./pages/Shipping'));
const SuccessPage = React.lazy(() => import('./pages/Success'));
// const PayPalCheckoutPage = React.lazy(() => import('./pages/PayPalCheckout'));
// <Route path='/test' element={<PayPalCheckoutPage />} />;

function App() {
	return (
		<Suspense fallback={<Spinner />}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path='/shop' element={<Shop />} />
						<Route path='/favorites' element={<Favorites />} />
						<Route path='/search' element={<SearchPage />} />

						<Route path='products' element={<AllProducts />} />
						<Route path='login' element={<Login />} />
						<Route path='category/:name' element={<SingleCategory />} />
						<Route path='signup' element={<Signup />} />
						<Route path='product' element={<ProductPage />} />
						<Route path='/cart' element={<CartPage />}>
							<Route index element={<Orders />} />
							<Route path='billing' element={<BillingPage />} />
							<Route path='shipping' element={<ShippingPage />} />
							<Route path='done' element={<SuccessPage />} />
							<Route path='*' element={<Error />} />
						</Route>

						<Route path='/profile' element={<Profile />} />
					</Route>
					<Route path='*' element={<Error />} />
				</Routes>
			</BrowserRouter>
		</Suspense>
	);
}

export default App;
