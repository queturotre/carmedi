<template>
  <div class="home">
    <CreditData /> <!-- v-for="credit in credits" :key="credit" :credit="credit" -->
  </div>
</template>

<script>
import CreditData from '@/components/CreditData.vue'
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    CreditData
  },
  data(){
    return{
      credits: null
    }
  },
  created(){
    axios
      .get('https://my-json-server.typicode.com/queturotre/carmedi/data')
      .then(response => {
        this.credits = response.data
        // console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>

</style>
