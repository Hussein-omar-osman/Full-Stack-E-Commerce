import React, { useState } from 'react';

function Inventory() {
	const [prods, setProds] = useState([]);

	const fetchProds = async () => {
		let res = await fetch('http://127.0.0.1:8000/api/shop/user/products/1/');
		let data = await res.json();
		console.log(data);
		setProds(data);
	};

	useState(() => {
		fetchProds();
	}, []);
	return (
		<>
			<div className='mt-2'>.</div>
			<table className='table pt-3 pb-2 mt-2'>
				<thead>
					<tr>
						<th scope='col'>Name</th>
						<th scope='col'>Price</th>
						<th scope='col'>Stock</th>
						<th scope='col'>Mfg</th>
						<th scope='col'>Img</th>
					</tr>
				</thead>
				<tbody>
					{prods.map((p) => {
						return (
							<tr>
								<td>{p.name}</td>
								<td>{p.price}</td>
								<td>{p.stock}</td>
								<td>{p.mfg.substring(0, 10)}</td>
								<td>{p.img.substring(0, 50)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}

export default Inventory;
