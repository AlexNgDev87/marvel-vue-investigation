<template>
  <div class="outer-container">
    <div class="character-list" v-for="character in characters" :key="character.id">
      <div class="left-panel">
        <img :src="character.src" :title="character.name" />
      </div>
      <div class="right-panel">
        <div class="inner-container">
          <h4><router-link :to="{ name: 'charactersDetail', params: { id: character.id }}">{{ character.name }}</router-link></h4>
          <p>{{ character.intro }}</p>
          <div>
            <strong class="label">Power / Abilities</strong>
            <p>{{ character.superpower }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
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

.outer-container {
  display: block;
}

.character-list {
  display: flex;
  border-bottom: 1px solid #e9e9e9;
  margin-bottom: 15px;
}

.label {
  text-decoration: underline;
}

.left-panel {
  display: inline-flex;
  padding: 0.5em 1.5em 0 .5em;
  border-right: 1px #e9e9e9 solid;
}

.left-panel img {
  width: 9.7em;
  height: 11.9em;
}

.right-panel {
  display: inline-flex;
  padding: 0 1em 0 1em;
}

.right-panel .inner-container {
  display: block;
}

</style>
