app.component('review-list', {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template:
    /*html*/
    `<div class="review-container">
      <h3>Reviews:</h3>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
          {{ review.name }}: {{ stars(review.rating) }}
          <br/>
          "{{ review.review }}"
          <br/>
          <small v-if="review.recommended">
            <strong>✅ RECOMMENDED!</strong>
          </small>
        </li>
      </ul>
    </div>
  `,
  methods: {
    stars(rating) {
      let starString = ''

      for (let i = 0; i < rating; i++)
        starString += '⭐'

      return starString
    }
  }
})