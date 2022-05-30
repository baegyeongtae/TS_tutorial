interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
    // something: object;
}

// 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {

}

// 위에 이 interface를 포함한 interface가 있어서 불필요한 선언이다. 해결 방법이 '유틸리티 타입'
// interface ProductDetail {
//     id: number;
//     name: string;
//     price: number;
// }


//유틸리티 타입
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>


function displayProductDetail(shoppingItem: ShoppingItem): {

}
