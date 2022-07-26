<template>
    <div v-if="credit">
        <p><b>{{ credit.creditName }}</b></p>
        <p>Con un máximo de ${{ credit.maxAmount }}</p>
        <p>Y un mínimo de ${{ credit.minAmount }}</p>
        <p>Puedes pagarlo hasta por {{ credit.maxTerm }} meses</p>
        <p>Mínimo por {{ credit.minTerm }} meses</p>
        <p>Y con un cobro único de ${{ credit.serviceFee }}</p>
    </div>
</template>

<script>
import CreditService from '@/services/CreditService'

export default {
    name: "CreditDetail",
    props:['id'],
    data() {
        return{
            credit: null
        }
    },
    created(){
        CreditService.getCredit(this.id)
        .then(response => {
            this.credit = response.data
        })
        .catch(error => console.log(error))
    }
}
</script>

<style scoped>
.credit-detail{
    border: 1px solid rgb(51, 51, 146);
    width: 250px;
}
.container{
    align-items: center;
}
</style>