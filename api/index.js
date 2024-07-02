import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:4000',
});

// 상품 목록 조회 API
function fetchProducts() {
	return instance.get('/products');
}

// 상품 상세 페이지
function fetchProductById(id) {
	return instance.get(`/products/${id}`);
}

// 위에 두개 합치기
// function fetchProducts(productId) {
// 	return instance.get('/products', {
// 		params: {
// 			id: productId,
// 		},
// 	});
// }

// 장바구니 아이템을 추가하는 API 함수
function createCartItem({ id, name, imageUrl, price }) {
	return instance.post(`/carts`, {
		id: id,
		name: name,
		imageUrl: imageUrl,
		price: price,
	});
}
// 장바구니 목록을 들고오는 API 함수
function fetchCarts() {
	return instance.get(`/carts`);
}

//특정 아이디에 해당하는 장바구니 아이템을 삭제하는 API 함수
function removeCartItem(id) {
	return instance.delete(`/carts/${id}`);
}

export {
	fetchProducts,
	fetchProductById,
	createCartItem,
	fetchCarts,
	removeCartItem,
};
