const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true
    }
  },
  methods: {
    addToCart(id) {
      this.cart.push(id)
    },
    removeFromCart(id) {
      const indexToRemove = this.cart.indexOf(id)
      const idExists = indexToRemove > -1

      // Array.prototype.splice(start, deleteCount)
      // ------------------------------------------
      //
      // Removes elements from an array and, if necessary, inserts new elements
      // in their place, returning the deleted elements.
      //
      // - start: Zero-based location from which to start removing elements.
      // - deleteCount: The number of elements to remove.

      if (idExists)
        this.cart.splice(indexToRemove, 1)
    }
  },
  computed: {
    cartIsEmpty() {
      return this.cart <= 0
    }
  }
})
