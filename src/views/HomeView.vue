<template>
  <section class="home">
    <!-- <component :is="MovieList"> -->
    <MovieList :movies="movies" :year="year" @load-data="loadMoreMovies()" />
    <!-- </component> -->
  </section>
</template>

<script>
import MovieList from "@/components/MovieList.vue";
import { mapState } from "vuex";
export default {
  name: "HomeView",
  components: {
    MovieList,
  },
  data() {
    return {
      moviesList: [],
      genresList: [],
      year: 2012,
      page: 1,
    };
  },
  computed: {
    ...mapState(["movies"]),
  },
  created() {
    this.getGenres();
    this.getMovies();
  },
  methods: {
    async getMovies() {
      await this.$store.dispatch("getMovies", this.year);
    },
    async loadMoreMovies() {
      await this.$store.dispatch("getMovies", ++this.year);
    },
    async getGenres() {
      await this.$store.dispatch("getGenres");
    },
  },
};
</script>
<style scoped>
.home {
  padding: 10px;
}
</style>
