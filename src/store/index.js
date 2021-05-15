import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      products: [
        { name: "Widgets",
          image: "http://placeimg.com/640/480/animals",
          price: 10
        },
        {
          name: "Doodads",
          image: "http://placeimg.com/640/480/animals",
          price: 8
        },
        {
          name: "Roundtuits",
          image: "http://placeimg.com/640/480/animals",
          price: 12
        },
        {
          name: "Fluff",
          image: "http://placeimg.com/640/480/animals",
          price: 4
        },
        {
          name: "Goobers",
          image: "http://placeimg.com/640/480/animals",
          price: 7
        }
      ],
      cart: []
    },
    getters: {
      cartTotal(state) {
        return state.cart.reduce((total, item) => {
          let product = state.products.find(p => p.title === item.title);
          return total + (product.price * item.quantity);
        }, 0);
      },

  },
    mutations: {
      addToCart(state, product) {
        let index = state.cart.findIndex(p => p.title === product.title);
        if(index !== -1) {
          state.cart[index].quantity++;
        } else {
          state.cart.push({
            title: product.title,
            quantity: 1,
            image: product.images,
            price: product.price
          });
        }
      },
      removeFromCart(state, product) {
        let index = state.cart.findIndex(p => p.name === product.title);
        if(index !== -1) {
          state.cart[index].quantity--;
          if(state.cart[index].quantity === 0) state.cart.splice(index, 1);
        }
      },
      setProducts(state, products){
        state.products = products;
      }
    },
    actions: {
      loadProducts(payload) {
        const path = "http://localhost:3000/api/products/variations"
          axios.get(path)
            .then((res) => {
              payload.commit('setProducts', res.data)
            })
            .catch(err => console.log(err))
      }
    }
})
