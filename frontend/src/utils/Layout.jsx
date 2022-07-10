import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../components';

const Layout = () => {
	return (
		<main className='p-3'>
			<Header />
			<Outlet />
		</main>
	);
};

export default Layout;
