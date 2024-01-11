<template >
  <div>
      <h2>{{$store.state.Testimonials.Testimonials.length ? $store.state.Testimonials.Testimonials[0].heading : 'Loading...'}}</h2>
      <p>{{$store.state.Testimonials.Testimonials.length ? $store.state.Testimonials.Testimonials[0]['para'] : 'Loading...'}}</p>
  </div>
  <Testo />

</template>
<script>
import { mapState } from 'vuex';
import Testo from '../components/Feedback.vue'

export default {
  computed: {
    ...mapState({
      testimonialsData: state => state.Testimonials
    }),
  },
  created() {
    this.$store.dispatch('fetchDataFromAPI'); // Corrected action name
  },
  components:{
    Testo,

  }
}
</script>
<style >
  
</style>