<template>
  <div class="movie-year">{{ year }}</div>
  <div
    ref="infiniteScroll"
    class="movie-container"
    @scroll="handleScroll"
    style="overflow-y: auto; height: 100vh"
  >
    <div v-for="(movie, index) in movies" :key="index">
      <div class="movie-card">
        <div class="movie-card-header">
          <img
            class="poster-img"
            :src="getPosterImg(movie.backdrop_path)"
            alt="movie-backdrop"
          />
        </div>
        <div class="movie-card-content">
          <div class="movie-title">{{ movie.title }}</div>
          <div class="movie-ratings">Ratings: {{ movie.vote_average }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["movies", "year"],
  components: {},
  data() {
    return {};
  },
  methods: {
    handleScroll() {
      const container = this.$refs.infiniteScroll;
      // Check if the user has scrolled to the bottom
      if (
        container.scrollTop + container.clientHeight >=
        container.scrollHeight
      ) {
        this.$emit("load-data");
      }
    },
    getPosterImg(path) {
      return "https://image.tmdb.org/t/p/original/" + path;
    },
  },
};
</script>
<style scoped>
.movie-container {
  display: flex;
  flex-wrap: wrap;
}
.movie-card {
  border: 1px solid black;
  width: 200px;
  height: 250px;
  margin: 30px;
  background-color: #424242;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.movie-title {
  color: #fff;
  font-family: Archivo;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  margin: 5px;
}
.movie-ratings {
  color: #fff;
  font-family: Archivo;
  font-size: 8px;
  font-style: normal;
  font-weight: 600;
  margin: 5px;
}
.movie-year {
  color: #fff;
  font-family: Archivo;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
  letter-spacing: -0.22px;
  margin: 10px 30px;
}
.poster-img {
  width: 200px;
  height: 250px;
}
</style>
