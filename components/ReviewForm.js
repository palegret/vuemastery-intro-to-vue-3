app.component('review-form', {
  template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
      <h3>
        Leave a review
      </h3>

      <p v-if="formTouched && !formIsValid" class="form-error">
        Review is incomplete. Please fill out every field.
      </p>

      <label for="name">Name:</label>
      <input id="name" v-model="name" @change="touchForm">

      <label for="review">Review:</label>
      <textarea id="review" v-model="review" @change="touchForm"></textarea>

      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating" @change="touchForm">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>

      <label for="recommended">Would you recommend this product?</label>
      <input id="recommended" v-model="recommended" type="checkbox" @change="touchForm">

      <input
        :class="{ disabledButton: !formIsValid }"
        :disabled="!formIsValid"
        class="button"
        type="submit"
        value="Submit"
      />
    </form>
  `,
  data() {
    return {
      name: '',
      review: '',
      rating: null,
      recommended: false,
      formTouched: false
    }
  },
  computed: {
    formIsValid() {
      return this.name && this.review && this.rating
    }
  },
  methods: {
    onSubmit() {
      if (!this.formIsValid)
        return false;

      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommended: this.recommended
      }

      this.$emit('review-submitted', productReview)

      this.resetForm()
    },
    resetForm() {
      this.formTouched = false
      this.name = ''
      this.review = ''
      this.recommended = false
      this.rating = null
    },
    touchForm() {
      this.formTouched = true
    }
  }
})
