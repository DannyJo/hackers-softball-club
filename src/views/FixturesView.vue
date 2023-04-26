<template>
  <Fixtures :season="season"/>
</template>

<script setup>
import Fixtures from "@/components/Fixtures.vue";
import {useRoute} from "vue-router";
import {ref, watch} from "vue";

const route = useRoute();
const currentSeason = new Date().getFullYear();
const season = ref();
const updateSeason = function(newSeason) {
  if (newSeason === 'current') {
    season.value = currentSeason;
  } else {
    season.value = newSeason
  }
}

watch(() => route.params.season, async newSeason => {
  updateSeason(newSeason);
});

updateSeason(route.params.season);
</script>
