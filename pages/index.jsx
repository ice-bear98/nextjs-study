import ProductHeader from '@/components/ProductHeader';
import ProductList from '@/components/product-list/ProductList';

export default function ProductPage() {
	return (
		<div>
			<ProductHeader title="상품 목록 페이지" />
			<ProductList></ProductList>
		</div>
	);
}

/*
1.product/productsId/1
2.carts

*/
