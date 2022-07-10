import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../components';

const Layout = () => {
	return (
		<main>
			<Header />
			<Outlet />
		</main>
	);
};

export default Layout;
