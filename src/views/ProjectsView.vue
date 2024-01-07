<template >
    <div>
        <h2>{{ projectsData?.[0]?.heading || 'Default Heading' }}</h2>
        <p>{{ projectsData?.[0]?.['subHeading'] || 'Default Subheading' }}</p>
    </div>
</template>
<script>
import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState({
        projectsData: state => state.Projects
      }),
    },
    created() {
      this.$store.dispatch('fetchDataFromAPI'); // Corrected action name
    },
  }
</script>
<style >
    
</style>