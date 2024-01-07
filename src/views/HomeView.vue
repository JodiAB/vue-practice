<template>
  
  <div class="home">
    <Stars />
    <div class="glowing-box">
      <div class="content">
        <div class="neon-box">
        <img alt="Vue logo" src="../assets/logo.png">
        <h1 class="lub">
          {{ homeData && homeData.length > 0 ? homeData[0].heading : 'Default Heading' }}
        </h1>
        <p>
          {{ homeData && homeData.length > 0 ? homeData[0]['sub-heading'] : 'Default Subheading' }}
        </p>
        <!-- Add more elements to display other properties if needed -->
      </div>
    </div>
  </div>
  </div>
  

</template>

<script>

import Stars from '../components/Stars.vue';
import { mapState } from 'vuex';
export default {
  
  computed: {
    ...mapState({
      homeData: state => state.Home,
      aboutData: state => state.About,
      resumeData: state => state.Resume,
      skillsData: state => state.skills,
      experienceData: state => state.EXP,
    }),
  },
  components: {
    Stars,
    


  },
  created() {
    this.$store.dispatch('fetchDataFromAPI');
  },
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

.content {
  display: flex;
  justify-content: flex-start;
}


.text-content {
  text-align: left;
}

.lub {
  background: radial-gradient(ellipse at bottom, #fff, transparent, transparent) 50% 100% / 50% 50% no-repeat;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 36px;
  font-family: "Orbitron";
  animation: reveal 3000ms ease-in-out forwards 200ms, glow 2500ms linear infinite 2000ms; 
}

@keyframes reveal {
  80% {
    letter-spacing: 8px;
  }
  100% {
    background-size: 300% 300%;
  }
}

@keyframes glow {
  40% {
    text-shadow: 0 0 8px #fff;
  }
}
</style>
