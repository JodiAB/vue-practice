<template >
  <div>
      <h2>{{$store.state.Projects.Projects.length ? $store.state.Projects.Projects[0].heading : 'Loading...'}}</h2>
      <p>{{$store.state.Projects.Projects.length ? $store.state.Projects.Projects[0]['subHeading'] : 'Loading...'}}</p>
  </div>

  <Cards />
</template>
<script>
import { mapState } from 'vuex';
import Cards from '@/components/Cards'

export default {
  computed: {
    ...mapState({
      projectsData: state => state.Projects
    }),
  },
  created() {
    this.$store.dispatch('fetchDataFromAPI'); 
  },
  components: {
    Cards,
  }
}
</script>

<style scoped>
.desire{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 150vh;
  overflow:hidden;
  background: linear-gradient(-50deg, rgb(10, 108, 61), #62f8b9, black, #3ffbe5);
  background-size: 200% 200%; 
  animation: fire 7s ease infinite;
}

@keyframes fire {
  0%{
  background-position: 0% 50%;
}
50%{
  background-position: 100% 50%;
}
100%{
  background-position: 0% 50%;
}
}
</style>
