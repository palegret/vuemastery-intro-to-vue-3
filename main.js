const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      brand: 'Vue Mastery',
      description: 'A comfy pair of socks.',
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50, reorder: 10, onSale: false },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0, reorder: 10, onSale: true },
      ],
      sizes: ['S', 'M', 'L', 'XL'],
      cart: 0,
      selectedVariantIndex: 0
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
    updateVariant(index) {
      this.selectedVariantIndex = index
    }
  },
  computed: {
    cartIsEmpty() {
      return this.cart <= 0
    },
    inStock() {
      return this.selectedVariant.quantity > 0
    },
    almostSoldOut() {
      return this.inStock && (this.selectedVariant.quantity <= this.selectedVariant.reorder)
    },
    image() {
      return this.selectedVariant.image
    },
    selectedVariant() {
      return this.variants[this.selectedVariantIndex || 0] || {}
    },
/*
Add an onSale boolean to the data.

Use a computed property to display the string: ’brand + ’ ’ product + ’ ’ is on sale’, whenever onSale is true.
*/    
  }
})

const mountedApp = app.mount('#app')
