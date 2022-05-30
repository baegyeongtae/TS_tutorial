interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
    // something: object;
}


// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {

}

// 위에 이 interface를 포함한 interface가 있어서 불필요한 선언이다. 해결 방법이 '유틸리티 타입'
// interface ProductDetail {
//     id: number;
//     name: string;
//     price: number;
// }



// 2. 특정 상품의 상세 정보를 나타내기 위한 함수

// 유틸리티 타입
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>

function displayProductDetail(shoppingItem: ShoppingItem): {

}


// 3. 특정 상품 정보를 업데이트(갱신)하는 함수

// interface UpdateProduct {
//     id?: number;
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number;
// }

type UpdateProduct = Partial<Product>;
function updateProductItem(productItem: Partial<Product>) {

}