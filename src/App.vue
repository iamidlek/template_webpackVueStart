<template>
  <h1 @click="adding">
    Test Text
  </h1>
  <p>{{ count }}</p>
  <div>
    <img 
      src="~assets/logo.png"
      alt="logo" />
  </div>
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

<style lang="scss" scoped>
h1 {
  color: blue;
}
</style>
