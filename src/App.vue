<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <a href="/">
              <img class="logo" src="./assets/marvel-characters-logo.png" />
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="/characters">Characters</a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <!-- <router-view /> -->
      <CharacterList />
    </main>
  </div>
</template>

<script>
// import HomePage from './home/HomePage.vue';
import CharacterList from './list/CharacterList.vue';

export default {
  name: 'app',
  components: {
    CharacterList,

  },
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

main {
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}

header {
  background-color: #999;
  width: 1084px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
</style>
