<template>
  <v-app-bar flat theme="dark">
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-app-bar-title>
      Hackers Softball
    </v-app-bar-title>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="left">
    <v-list nav>
      <v-list-item title="Home" :value="'/'" :to="'/'"></v-list-item>
      <v-list-subheader>{{ currentSeason }} Season</v-list-subheader>
      <v-list-item title="Summary" :to="'/seasons/' + currentSeason"></v-list-item>
      <v-list-item title="Player Statistics" :to="'/seasons/' + currentSeason + '/players'"></v-list-item>
      <v-list-item title="Fixtures & Results" :to="'/seasons/' + currentSeason + '/fixtures'"></v-list-item>
      <v-divider></v-divider>
      <v-list-subheader>Historical Data</v-list-subheader>
      <v-list-item v-for="season in seasonData" :title="season.title" :value="season.year" :to="'/seasons/' + season.year"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import {computed, ref} from "vue";

const drawer = ref(false);
const seasons = ref([]);
const currentSeason = ref(new Date().getFullYear());

const getData = async function () {
  const res = await fetch("/data/seasons.json");
  seasons.value = await res.json();
}

const seasonData = computed(() => {
  const currentYear = new Date().getFullYear();
  return [...seasons.value].filter(value => value.year < currentYear).reverse();
});

getData();
</script>
