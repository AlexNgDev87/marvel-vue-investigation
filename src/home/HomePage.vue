<template>
  <div class="home">
    <div>
      <img class="marvel" src="../assets/marvel-home.png" aria-hidden="true" />
    </div>
    <div class="get-started">
      <a href="">Get Started</a> discover your marvel character!
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
}
.get-started {
  margin: 15px auto 0px auto;
}
</style>
