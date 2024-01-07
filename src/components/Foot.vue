<template >
    <div class="footer">
        <h2 class="foot">{{ footerData?.[0]?.heading || 'Default Heading' }}</h2>
    </div>
</template>
<script>
import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState({
        footerData: state => state.Footer
      }),
    },
    created() {
      this.$store.dispatch('fetchDataFromAPI'); // Corrected action name
    },
  }
</script>
<style >
.footer {
    background-color: #000;
    padding: 20px;
    text-align: center;
  }
  
  .foot {
    color: #00ff00; /* Neon green color */
    font-size: 16px;
    font-family: 'Arial', sans-serif;
    letter-spacing: 2px;
    text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00; /* Neon glow effect */
  }
  
</style>