import { createStore } from "vuex";
export default createStore({
  state: {
    products: [
      {
        id: 1,
        img: "/products/product1.jpg",
        title: "product 1",
        price: 130,
        category: "ring",
      },
      {
        id: 2,
        img: "/products/product2.jpg",
        title: "product 2",
        price: 130,
        category: "necklace",
      },
      {
        id: 3,
        img: "/products/product3.jpg",
        title: "product 3",
        price: 130,
        category: "necklace",
      },
      {
        id: 4,
        img: "/products/product4.jpg",
        title: "product 4",
        price: 430,
        category: "earring",
      },
      {
        id: 5,
        img: "/products/product5.jpg",
        title: "product 5",
        price: 130,
        category: "ring",
      },
      {
        id: 6,
        img: "/products/product6.jpg",
        title: "product 6",
        price: 130,
        category: "necklace",
      },
      {
        id: 7,
        img: "/products/product1.jpg",
        title: "product 7",
        price: 130,
        category: "ring",
      },
      {
        id: 8,
        img: "/products/product2.jpg",
        title: "product 8",
        price: 130,
        category: "necklace",
      },
      {
        id: 9,
        img: "/products/product3.jpg",
        title: "product 9",
        price: 130,
        category: "necklace",
      },
      {
        id: 10,
        img: "/products/product4.jpg",
        title: "product 10",
        price: 430,
        category: "earring",
      },
    ],
    productID:null,
    cart:[]
  },
  getters: {
    getProducts :(state) => state.products,
    getProductId:(state) => state.productID,
    getCart : (state) => state.cart
  },
  actions: {
    async getProductIdAc({commit,state},id){
        try{
            const product = state.products.find((product) => product.id === id);
            commit('GET_PRODUCT_BY_ID',product);
        }
        catch(error){
            console.error('error in get product by id action :',error)
        }
    },
    addToCart({commit},item){
        commit('ADD_TO_CART',item)
    }
  },
  mutations: {
    GET_PRODUCT_BY_ID(state,product){
        state.productID = product
    },
    ADD_TO_CART(state,item){
        state.cart.push(item);
    }
  },
});
