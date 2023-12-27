import { createStore } from "vuex";
import axios from "axios";
// Create a new store instance.
const store = createStore({
  state() {
    return {
      movies: [],
      genres: [],
      filter: []
    };
  },
  mutations: {
    SET_MOVIES(state, movies) {
      state.movies = movies;
    },
    SET_GENRES(state, genres) {
      state.genres = genres;
    },
  },
  actions: {
    getMovies({ commit }, year = 2012) {
      axios
        .get("https://api.themoviedb.org/3/discover/movie", {
          params: {
            api_key: "2dca580c2a14b55200e784d157207b4d",
            sort_by: "popularity.desc",
            primary_release_year: year,
            page: 1,
            vote_count_gte: 100,
          },
        })
        .then((res) => {
          commit("SET_MOVIES", [
            ...this.state.movies,
            ...res.data.results,
          ]);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    },
    getGenres({ commit }) {
      axios
        .get("https://api.themoviedb.org/3/genre/movie/list", {
          params: {
            api_key: "2dca580c2a14b55200e784d157207b4d",
          },
        })
        .then((response) => {
          commit("SET_GENRES", response.data.genres);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});

export default store;
