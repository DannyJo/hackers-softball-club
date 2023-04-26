<template>
  <h2 class="text-h5">Fixtures</h2>
  <v-table density="compact">
    <thead>
      <tr>
        <th>Outcome</th>
        <th>Date</th>
        <th>Home/Away</th>
        <th>Opposition</th>
        <th>Pitch</th>
        <th>MVPs</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="match in matchData">
        <td><v-chip density="compact" :color="getOutcomeColor(match.outcome)" rounded="0" class="text-capitalize">{{ match.outcome.toLowerCase() }}</v-chip></td>
        <td class="text-no-wrap">{{ match.date }}</td>
        <td class="text-capitalize">{{ match.place.toLowerCase() }}</td>
        <td>{{ match.opposition }}</td>
        <td>{{ match.pitch }}</td>
        <td>{{ match.mvp }}</td>
        <td>{{ match.result }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
import {ref, watch} from "vue";

const props = defineProps(['season'])
const matchData = ref([]);
const getData = async function(season) {
  const res = await fetch("/data/" + season + "/matches.json");
  matchData.value = await res.json();
}

const getOutcomeColor = function(outcome) {
  if (outcome === 'WIN') {
    return 'success';
  } else if (outcome === 'LOSS') {
    return 'error';
  } else if (outcome === 'RESTING') {
    return 'info';
  }

  return '';
}

watch(() => props.season, async newSeason => {
  await getData(newSeason);
});

getData(props.season);
</script>
