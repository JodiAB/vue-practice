<template>
    <div class="about">
      <h2>{{ resumeData?.[0]?.heading || 'Default Heading' }}</h2>
      <p>{{ resumeData?.[0]?.['text'] || 'Default Subheading' }}</p>
    </div>
    <Timeline />
  </template>
  
  <script>
  import { mapState } from 'vuex';
  import Timeline from '../components/Timeline.vue';
  export default {
    computed: {
      ...mapState({
        resumeData: state => state.Resume
      }),
    },
    components:{
      Timeline,
    },
    created() {
      this.$store.dispatch('fetchDataFromAPI'); // Corrected action name
    },
  }
  </script>