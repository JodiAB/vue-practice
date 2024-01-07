<template >
    <div class="time">
        <div class="box">
        <h2>{{ timeData?.[0]?.heading || 'Default Heading' }}</h2>
        <div class="date">
            {{ timeData?.[0]?.['date'] || 'Default Date' }}
    <h3>{{ timeData?.[0]?.['subHeading'] || 'Default Subheading' }}</h3>
    <p>{{ timeData?.[0]?.['point1'] || 'Default Point1' }}</p>
        </div>
    </div>
</div>

</template>
<script>
import { mapState } from 'vuex';
export default {
    computed:{
    ...mapState({
        timeData: state => state.Time
    }),
    },
    created(){
        this.$store.dispatch('fetchDataFromAPI');
    },
  
}
</script>
<style scoped>


.time{
    display: flex;
    justify-content: flex-start;
    text-align: left;
    width: 45%;
    margin-left: 20px;
    font-size: 18px;
}

.box{
    border: 2px solid #f0f8ff; 
    padding: 20px;
    border-radius: 1px;
    box-shadow: 0 0 1px #f0f8ff, 0 0 2px #f0f8ff, 0 0 13px #f0f8ff; 
}
</style>
