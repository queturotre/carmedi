<template>
  <div class="container">
    <h1>BankNotes</h1>
    <p>In this problem you have to read an integer value and calculate the smallest possible number of banknotes in which the value may be decomposed. The possible banknotes are 100, 50, 20, 10, 5, 2 and 1. Print the read value and the list of banknotes.</p>
    <h2>Input</h2>
    <p>The input file contains an integer value N (0 less than N less than 1000000).</p>
    <h2>Output</h2>
    <p>Print the read number and the minimum quantity of each necessary banknotes in Portuguese language, as the given example. Do not forget to print the end of line after each line, otherwise you will receive “Presentation Error”.</p>
    <h3>Development</h3>
    <input type="number" id="plata" placeholder="Quantity"><button @click="calcular">Submit</button><br>
    <div class="resultado" v-if="show">
      <p>Para ${{ plata.value }}, se necesitan</p>
      <p v-if="cien !== 0">{{ cien }} Billete(s) de $100</p>
      <p v-if="cincuenta !== 0">{{ cincuenta }} Billete(s) de $50</p>
      <p v-if="veinte !== 0">{{ veinte }} Billete(s) de $20</p>
      <p v-if="diez !== 0">{{ diez }} Billete(s) de $10</p>
      <p v-if="cinco !== 0">{{ cinco }} Billete(s) de $5</p>
      <p v-if="dos !== 0">{{ dos }} Billete(s) de $2</p>
      <p v-if="uno !== 0">{{ uno }} Billete(s) de $1</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BankNotes',
  data(){
    return{
      show: false,
      uno: 0, dos: 0, cinco: 0, diez: 0, veinte: 0, cincuenta: 0, cien: 0,
      numero: 0, plata: 0
    }
  },
  methods: {
    calcular(){
      this.plata = document.getElementById("plata")
      this.numero = parseInt(this.plata.value)
      
      this.cien = parseInt(this.numero / 100)
      this.numero -= this.cien * 100
      
      this.cincuenta = parseInt(this.numero / 50)
      this.numero -= this.cincuenta * 50
      
      this.veinte = parseInt(this.numero / 20)
      this.numero -= this.veinte * 20

      this.diez = parseInt(this.numero / 10)
      this.numero -= this.diez * 10
      
      this.cinco = parseInt(this.numero / 5)
      this.numero -= this.cinco * 5

      this.dos = parseInt(this.numero / 2)
      this.numero -= this.dos * 2

      this.uno = parseInt(this.numero / 1)
      this.numero -= this.uno * 1

      this.show = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
