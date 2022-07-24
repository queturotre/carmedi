<template>
    <h1 class="titulo">Time Conversion</h1>
    <p>Read an integer value, which is the duration in seconds of a certain event and inform it expressed in <b>hours:minutes:seconds.</b></p>
    <h3>Development</h3>
    <input type="number" id="segundos" placeholder="Seconds"><button @click="calcular">Submit</button><br>
    <span class="show" v-if="show">{{horas}}h {{minutos}}m {{numero}}s</span>
</template>
<script>
export default {
    name: "TimeConversion",
    data() {
        return{
            numero: 0, segundos: 0,
            horas: 0, minutos: 0,
            show: false
        }
    },
    methods:{
        calcular(){
            this.segundos = document.getElementById("segundos")
            this.numero = parseInt(this.segundos.value)
            
            this.horas = parseInt(this.numero / 3600) // 2
            this.numero -= this.horas * 3600 //
            
            this.minutos = parseInt(this.numero / 60)
            this.numero -= this.minutos * 60

            this.show = true;
        }
    }
}
</script>
<style scoped>
.titulo{
    color: fuchsia;
    font-size: 40px;
    font-style: italic;
}
</style>