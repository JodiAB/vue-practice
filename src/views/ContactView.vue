<template >
    <div>
        <h2>{{ contactsData?.[0]?.heading || 'Default Heading' }}</h2>
        <p>{{ contactsData?.[0]?.['subHeading'] || 'Default Subheading' }}</p>
    </div>
</template>
<script>
import { mapState } from 'vuex';
  
  export default {
    computed: {
      ...mapState({
        contactsData: state => state.Contact
      }),
    },
    created() {
      this.$store.dispatch('fetchDataFromAPI'); // Corrected action name
    },
  }
</script>
<style >
    
</style>