<template>
  <h2 class="text-h5">Fixtures</h2>
  <v-table density="compact">
    <thead>
      <tr>
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
        <td :class="match.outcome.toLowerCase()" class="text-no-wrap">{{ match.date }}</td>
        <td class="text-capitalize">{{ match.place.toLowerCase() }}</td>
        <td>{{ match.opposition }}</td>
        <td>{{ match.pitch }}</td>
        <td>{{ match.mvp }}</td>
        <td class="text-no-wrap">{{ match.result }}</td>
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

watch(() => props.season, async newSeason => {
  await getData(newSeason);
});

getData(props.season);
</script>

<style scoped>
  .win {
    border-left: 7px solid #a5d6a7;
  }

  .loss {
    border-left: 7px solid #ff7d7d;
  }

  .resting {
    border-left: 7px solid #90caf9;
  }

  .fixture {
    border-left: 7px solid #c7c7c7;
  }
</style>
