<template>
  <h1 @click="adding">Test Text</h1>
  <p>{{ count }}</p>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    adding() {
      this.count +=1
    }
  }
}
</script>
