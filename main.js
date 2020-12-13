const app = Vue.createApp({ 
  data() {
    return {
      product: 'Socks',
      description: 'A comfy pair of socks.',
      image: './assets/images/socks_green.jpg',
      url: 'https://www.vuemastery.com/courses/intro-to-vue-3/attribute-binding-vue3/'
    }
  }
})

const mountedApp = app.mount('#app')
