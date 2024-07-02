import { fetchProductById } from '@/api';
import ProductHeader from '@/components/ProductHeader';
import ProductInfo from '@/components/product-detail/ProductInfo';

import axios from 'axios';
import React from 'react';

export default function ProductDetailPage({ productDetail }) {
	return (
		/*헤더 컴포넌트를 등록하고 title 프롭스에 상품상세페이지*/
		<div>
			<ProductHeader title="상품 상세 정보 페이지" />
			<ProductInfo productDetail={productDetail} />
		</div>
	);
}

export async function getServerSideProps(context) {
	const id = context.params.productId;
	const res = await fetchProductById(id);

	return {
		props: { productDetail: res.data },
	};
}
