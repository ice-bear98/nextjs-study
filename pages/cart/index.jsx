import { fetchCarts } from '@/api';
import CartHeader from '@/components/cart/CartHeader';
import CartList from '@/components/cart/CartList';
import React from 'react';

export default function CartPage({ carts }) {
	return (
		<div>
			<CartHeader />
			<CartList carts={carts} />
		</div>
	);
}

export async function getServerSideProps() {
	const { data } = await fetchCarts();

	return {
		props: {
			carts: data,
		},
	};
}
