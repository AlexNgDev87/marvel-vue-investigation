<template>
  <div class="container">
    <div class="left-panel">
      <img v-bind:src="characters[0].src" title="hero" />
    </div>
    <div class="right-panel">
      <div style="display: block;">
        <h4>Antman</h4>
        <p>Nice little fella</p>
      </div>
    </div>
  </div>


  <!-- <div>
    <ul>
      <li>hero 1</li>
      <li>hero 2</li>
      <li>hero 3</li>
      <li>hero 4</li>
      <li>hero 5</li>
      <li>hero 6</li>
      <li>hero 7</li>
      <li>hero 8</li>
    </ul>
  </div> -->
</template>

<script>
import characters from '../data/characters';

export default {
  name: 'CharacterList',
  data() {
    return {
      characters,
    };
  },
};
</script>

<style>
.container {
  display: flex;
}
.left-panel {
  display: inline-flex;
}
.right-panel {
  display: inline-flex;
}

.right-panel h4 {

}
</style>
