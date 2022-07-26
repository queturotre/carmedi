<template>
  <div class="credits">
    <span>{{ credit.creditName }}</span>
    <h4>{{ credit.creditType }}</h4>
  </div>
</template>

<script>
export default {
  name: 'CreditData',
  props:{
    credit: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.credits {
  border: 1px solid #39495c;
  cursor: pointer;
  margin-bottom: 18px;
  padding: 20px;
  width: 250px;
}
.credits:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
