<template >
    <div>
        <h2>{{ testimonialsData?.[0]?.heading || 'Default Heading' }}</h2>
        <p>{{ testimonialsData?.[0]?.['para'] || 'Default Subheading' }}</p>
    </div>
</template>
<script>
import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState({
        testimonialsData: state => state.Testimonials
      }),
    },
    created() {
      this.$store.dispatch('fetchDataFromAPI'); // Corrected action name
    },
  }
</script>
<style >
    
</style>