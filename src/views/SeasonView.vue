<template>
  <h1 class="text-h4">{{ season }}</h1>
  <v-row no-gutters>
    <v-col>
      <SeasonStatistics :season="season"/>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <Fixtures :season="season"/>
    </v-col>
    <v-col>
      <h2 class="text-h5">Pitch Map</h2>
      <v-img src="@/assets/wsg-pitch-map-2023.jpg" />

      <EasyFundraising></EasyFundraising>
    </v-col>
  </v-row>
</template>

<script setup>
import SeasonStatistics from "@/components/Statistics.vue";
import {useRoute} from "vue-router";
import Fixtures from "@/components/Fixtures.vue";
import {ref, watch} from "vue";
import EasyFundraising from "@/components/EasyFundraising.vue";

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
