<template>
  <div class="home">
    <CreditData v-for="credit in credits" :key="credit"/> <!--  -->
  </div>
</template>

<script>
import CreditData from '@/components/CreditData.vue'
import CreditService from '@/services/CreditService'

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
    CreditService.getCredits()
      .then(response => {
        this.credits = response.data
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>

</style>
