<template>
  <SeasonStatistics :season="season"/>
  <v-divider />
  <StatisticsLegend/>
</template>

<script setup>
import SeasonStatistics from "@/components/Statistics.vue";
import {useRoute} from "vue-router";
import {ref, watch} from "vue";
import StatisticsLegend from "@/components/StatisticsLegend.vue";

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
