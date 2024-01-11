<template>
  <div>
    <Spin />
    <Navi />
    <router-view />
    <Stars />
    <Foot />
  </div>
</template>

<script>
import Navi from '@/components/Navi.vue'; // Adjust the import path based on your project structure
import Foot from '@/components/Foot.vue';
import Stars from '@/components/Stars.vue'
import Spin from '@/components/Spin.vue'
export default {
  components: {
    Navi,
    Foot,
    Stars,
    Spin,
    
  
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: #160808;
  color: #ffffff;
  font-family: 'Arial', sans-serif;
}

.home {
  padding: 20px;
  text-align: center;
}

h2, p {
  color: #fff;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5); /* Add a soft shadow */
}

h2 {
  font-size: 24px;
}

</style>

