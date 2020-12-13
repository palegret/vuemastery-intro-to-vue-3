const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      description: 'A comfy pair of socks.',
      image: './assets/images/socks_green.jpg',
      inventory: 100,
      reorderQuantity: 10,
      onSale: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
      ],
      sizes: ['S', 'M', 'L', 'XL'],
      cart: 0
    }
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    removeFromCart() {
      this.cart -= 1
      this.cart = this.cart < 0 ? 0 : this.cart
    },
    updateImage(variantImage) {
      this.image = variantImage
    }
  },
  computed: {
    cartIsEmpty() {
      return this.cart <= 0
    },
    inStock() {
      return this.inventory > 0
    },
    almostSoldOut() {
      return this.inventory <= this.reorderQuantity
    }    
  }
})

const mountedApp = app.mount('#app')
