<template>
  <div class="home">
    <button @click="mostrar">This is the button</button>
    <CreditData v-for="credit in credits" :key="credit" :credit="credit"/> <!--  -->
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
      credits: []
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
  border: solid 1px salmon;
}
</style>
