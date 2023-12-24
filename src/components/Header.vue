<template>
  <header>
    <div class="header">
      <img class="app-logo" src="@/assets/fancode-fc.png" />
      <input class="search-field" placeholder="Search.." />
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      genres: [
        {
          text: "All",
          name: "all",
        },
        {
          text: "Action",
          name: "action",
        },
        {
          text: "Comedy",
          name: "comedy",
        },
        {
          text: "All",
          name: "all",
        },
        {
          text: "All",
          name: "all",
        },
      ],
    };
  },
};
</script>

<style>
.header {
  background-color: #242424;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
}
.search-field {
  width: 25%;
  height: 25px;
}
</style>
