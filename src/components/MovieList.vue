<template>
  <div class="movie-year">{{ year }}</div>
  <div ref="infiniteScroll" class="movie-container" @scroll="handleScroll">
    <div v-for="(movie, index) in movies" :key="index">
      <div class="movie-card">
        <img
          class="poster-img"
          :src="getPosterImg(movie.backdrop_path)"
          alt="movie-backdrop"
        />
        <div class="movie-card-content">
          <div class="movie-title">{{ movie.title }}</div>
        </div>
        <div class="image-overlay overlay-text">
          <div>
            <span class="bold-text">Ratings:</span>
            {{ movie.vote_average }}
          </div>
          <hr />
           <div>
            <span class="bold-text">Genres:</span>
            <div
              v-for="(genre, index) in getGenresName(movie.genre_ids)"
              :key="index"
            >
              <span>{{ genre.name }}</span>
            </div>
          </div>
          <hr />
          <div>
            <span class="bold-text">Description:</span>
            {{ movie.overview }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  props: ["movies", "year"],
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["genres"]),
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
    getGenresName(ids) {
      return ids.map((id) => {
        return this.genres.find((genre) => genre.id === id);
      });
    },
  },
};
</script>
<style>
.movie-container {
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  height: 100vh;
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
  position: relative;
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
  display: block;
}
.movie-card:hover .image-overlay {
  opacity: 1;
}
.movie-overview {
  color: #fff;
  font-family: Archivo;
  font-size: 8px;
  font-style: normal;
  font-weight: 600;
  margin: 5px;
}
.image-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: lightgray;
}
.overlay-text {
  color: black;
  font-size: 12px;
  position: absolute;
  padding: 5px;
  overflow-y: scroll;
}
.bold-text {
  font-weight: 600;
}
</style>
