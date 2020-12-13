const app = Vue.createApp({ 
  data() {
    return {
      product: 'Socks',
      description: 'A comfy pair of socks.',
      image: './assets/images/socks_green.jpg',
      inStock: true,
      inventory: 100,
      onSale: true
    }
  }
})

const mountedApp = app.mount('#app')
