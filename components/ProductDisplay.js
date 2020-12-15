app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template:
    /*html*/
    `<div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img :class="{ 'out-of-stock-img': !inStock }" :src="image">
        </div>
        <div class="product-info">
          <h1>
            {{ brand + ' ' + product }}
            <span v-show="selectedVariant.onSale" class="on-sale">💥 Now On Sale! 💥</span>
          </h1>

          <p>{{ description }}</p>

          <p v-if="almostSoldOut">Almost sold out!</p>
          <p v-else-if="inStock">In stock</p>
          <p v-else>Out of stock</p>

          <p>Shipping: {{ shipping }}</p>

          <ul>
            <li v-for="detail in details">{{ detail }}</li>
          </ul>

          <div
            v-for="(variant, index) in variants"
            :key="variant.id"
            :style="{ backgroundColor: variant.color }"
            @mouseover="updateVariant(index)"
            class="color-circle"
          ></div>

          <div v-for="size in sizes" :key="size">{{ size }}</div>

          <button
            :class="{ disabledButton: !inStock }"
            :disabled="!inStock"
            @click="addToCart"
            class="button"
          >Add to Cart</button>

          <button
            :class="{ disabledButton: !inStock || cartIsEmpty }"
            :disabled="!inStock || cartIsEmpty"
            @click="removeFromCart"
            class="button"
          >Remove from Cart</button>
        </div>
      </div>
    </div>`,
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
    shipping() {
      return this.premium ? 'Free' : '2.99'
    }
  }
})