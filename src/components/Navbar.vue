<template>
  <nav>
    <div class="genres">
      <button @click="toggleGenre(genre)" class="genre-btn" v-for="genre in genres" :key="genre.id">
        {{ genre.name }}
      </button>
    </div>
  </nav>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["genres"]),
  },
  methods:{
    toggleGenre(genre) {
      console.log('event', genre);
    }
  }
};
</script>
<style>
.genres {
  overflow-x: scroll;
  margin: 0px 30px;
  flex-wrap: nowrap;
  display: flex;
}
nav {
  background-color: #242424;
}
.genre-btn {
  background-color: #747474;
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 4px;
  margin: 10px;
  text-wrap: nowrap;
}
.genre-btn:active {
  color: #ffffff;
  background-color: #f0283c;
}
</style>
