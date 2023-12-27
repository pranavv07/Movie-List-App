<template>
  <section class="home">
    <MovieList
      :movies="movies"
      :year="year"
      @load-next-data="loadNextYearMovies()"
    />
    <!-- @load-prev-data="loadPrevYearMovies()" -->
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
    async loadNextYearMovies() {
      await this.$store.dispatch("getMovies", ++this.year);
    },
    // async loadPrevYearMovies() {
    //   await this.$store.dispatch("getMovies", --this.year);
    // },
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
