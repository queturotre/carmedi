<template>
  <div class="home">
    <CreditData v-for="credit in credits" :key="credit.id" :credit="credit" /> 
  </div>
</template>

<script>
import CreditData from '@/components/CreditData.vue'
import CreditService from '@/services/CreditService.js'

export default {
  name: 'CreditHome',
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
  },
  methods:{
    mostrar(){
      console.log(this.credits)
    }
  }
}
</script>

<style scoped>
.home{
  align-items: center;
  display: flex;
  flex-direction: column;
}
</style>
