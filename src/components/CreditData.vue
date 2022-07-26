<template>
  <router-link
    class="event-link"
    :to="{ name: 'CreditDetail', params: { id: credit.id } }"
  >
    <div class="credits">
      <span>{{ credit.creditName }}</span>
      <h4>Tipo {{ credit.creditType }}</h4>
    </div>
  </router-link>
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
.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
