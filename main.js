const app = Vue.createApp({ 
  data() {
    return {
      product: 'Socks',
      description: 'A comfy pair of socks.'
    }
  }
})

const mountedApp = app.mount('#app')
