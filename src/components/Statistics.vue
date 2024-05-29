<template>
  <h2 class="text-h5">Player Statistics</h2>
  <v-menu :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <v-btn append-icon="mdi-chevron-down" flat color="primary" v-bind="props">
        <v-icon icon="mdi-table-headers-eye"/>
      </v-btn>
    </template>
    <v-list density="compact">
      <v-list-subheader>Visible Columns</v-list-subheader>
      <v-list-item v-for="(_, column) in tableState.columns" :value="column" @click="tableState.columns[column] = !tableState.columns[column]" :active="tableState.columns[column]">
        <template v-slot:prepend="{ isActive }">
          <v-list-item-action start>
            <v-icon :icon="isActive ? 'mdi-check' : ''"/>
          </v-list-item-action>
        </template>
        <v-list-item-title>{{ column }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
  <v-table density="compact" hover>
    <thead>
    <tr>
      <th @click="sortBy('name')" class="text-primary bg-white" style="position: sticky; top: 0; left: 0; z-index: 2">Player
        <v-icon size="1em" :icon="getSortIcon('name')"/>
      </th>
      <th v-show="tableState.columns['AB']" @click="sortBy('atBat')" class="text-primary text-center">AB
        <v-icon size="1em" :icon="getSortIcon('atBat')"/>
      </th>
      <th v-show="tableState.columns['H']" @click="sortBy('hits')" class="text-primary text-center">H
        <v-icon size="1em" :icon="getSortIcon('hits')"/>
      </th>
      <th v-show="tableState.columns['BB']" @click="sortBy('walks')" class="text-primary text-center">BB
        <v-icon size="1em" :icon="getSortIcon('walks')"/>
      </th>
      <th v-show="tableState.columns['RBI']" @click="sortBy('runsBattedIn')" class="text-primary text-center">RBI
        <v-icon size="1em" :icon="getSortIcon('runsBattedIn')"/>
      </th>
      <th v-show="tableState.columns['1B']" @click="sortBy('firstBase')" class="text-primary text-center">1B
        <v-icon size="1em" :icon="getSortIcon('firstBase')"/>
      </th>
      <th v-show="tableState.columns['2B']" @click="sortBy('secondBase')" class="text-primary text-center">2B
        <v-icon size="1em" :icon="getSortIcon('secondBase')"/>
      </th>
      <th v-show="tableState.columns['3B']" @click="sortBy('thirdBase')" class="text-primary text-center">3B
        <v-icon size="1em" :icon="getSortIcon('thirdBase')"/>
      </th>
      <th v-show="tableState.columns['HR']" @click="sortBy('homeRuns')" class="text-primary text-center">HR
        <v-icon size="1em" :icon="getSortIcon('homeRuns')"/>
      </th>
      <th v-show="tableState.columns['C']" @click="sortBy('catches')" class="text-primary text-center">C
        <v-icon size="1em" :icon="getSortIcon('catches')"/>
      </th>
      <th v-show="tableState.columns['MVP']" @click="sortBy('mvp')" class="text-primary text-center">MVP
        <v-icon size="1em" :icon="getSortIcon('mvp')"/>
      </th>
      <th v-show="tableState.columns['AVG']" @click="sortBy('avg')" class="text-primary text-center">AVG
        <v-icon size="1em" :icon="getSortIcon('avg')"/>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="player in playerStats" :class="{'bg-warning': erroneousData(player.stats)}">
      <td class="bg-white text-no-wrap" style="border-right: 1px solid lightgray; position: sticky; top: 0; left: 0; z-index: 2">{{ getPlayerName(player) }}</td>
      <td v-show="tableState.columns['AB']" class="text-center">{{ player.stats.atBat }}
        <v-icon size="1em" icon=""/>
      </td>
      <td v-show="tableState.columns['H']" class="text-center">{{ player.stats.hits }}
        <v-icon size="1em" icon=""/>
      </td>
      <td v-show="tableState.columns['BB']" class="text-center">{{ player.stats.walks }}
        <v-icon size="1em" icon=""/>
      </td>
      <td v-show="tableState.columns['RBI']" class="text-center">{{ player.stats.runsBattedIn }}
        <v-icon size="1em" icon=""/>
      </td>
      <td v-show="tableState.columns['1B']" class="text-center bg-yellow-lighten-4">{{ player.stats.firstBase }}
        <v-icon size="1em" icon=""/>
      </td>
      <td v-show="tableState.columns['2B']" class="text-center bg-yellow-lighten-4">{{ player.stats.secondBase }}
        <v-icon size="1em" icon=""/>
      </td>
      <td v-show="tableState.columns['3B']" class="text-center bg-yellow-lighten-4">{{ player.stats.thirdBase }}
        <v-icon size="1em" icon=""/>
      </td>
      <td v-show="tableState.columns['HR']" class="text-center bg-yellow-lighten-4">{{ player.stats.homeRuns }}
        <v-icon size="1em" icon=""/>
      </td>
      <td v-show="tableState.columns['C']" class="text-center">{{ player.stats.catches }}
        <v-icon size="1em" icon=""/>
      </td>
      <td v-show="tableState.columns['MVP']" class="text-center">{{ player.stats.mvp }}
        <v-icon size="1em" icon=""/>
      </td>
      <td v-show="tableState.columns['AVG']" class="text-center">{{ player.stats.avg }}
        <v-icon size="1em" icon=""/>
      </td>
      <th v-show="erroneousData(player.stats)" class="text-error text-center">ERROR</th>
    </tr>
    </tbody>
  </v-table>
</template>

<script setup>
import {computed, reactive, ref, watch} from "vue";

const props = defineProps(['season'])

const playerData = ref([]);

const getData = async function (season) {
  const res = await fetch("/data/" + season + "/players.json");
  playerData.value = await res.json();
}

const erroneousData = function (stats) {
  return (stats.hits !== (stats.walks + stats.firstBase + stats.secondBase + stats.thirdBase + stats.homeRuns));
}

const tableState = reactive({
  sortBy: 'name',
  sortDirection: 1,
  columns: {
    AB: true,
    H: true,
    BB: true,
    RBI: true,
    '1B': true,
    '2B': true,
    '3B': true,
    HR: true,
    C: true,
    MVP: true,
    AVG: true
  }
});

const sortBy = function (field) {
  if (field === tableState.sortBy) {
    tableState.sortDirection *= -1;
  } else {
    tableState.sortDirection = 1;
  }

  tableState.sortBy = field;
}

const getPlayerName = function (player) {
  return player.team === 'Hackers' ? player.name : player.name + ' (' + player.team + ')';
}

const getSortIcon = function (field) {
  if (tableState.sortBy !== field) {
    return '';
  }

  if (tableState.sortDirection === 1) {
    return 'mdi-arrow-down';
  } else {
    return 'mdi-arrow-up'
  }
}

const playerStats = computed(() => {
  return [...playerData.value].map(value => {
    return {
      ...value,
      stats: {
        ...value.stats,
        avg: value.stats.atBat === 0 ? 0 : (value.stats.hits / value.stats.atBat).toFixed(3)
      }
    }
  }).sort((p1, p2) => {
    let value = 0;
    if (tableState.sortBy === 'name') {
      const nameA = p1.name.toUpperCase();
      const nameB = p2.name.toUpperCase();

      if (nameA < nameB) {
        value = -1;
      }

      if (nameA > nameB) {
        value = 1;
      }
    } else {
      value = (p1.stats[tableState.sortBy] - p2.stats[tableState.sortBy]);
    }

    return value * tableState.sortDirection;
  });
});

watch(() => props.season, async newSeason => {
  await getData(newSeason);
});

getData(props.season);
</script>

<style scoped>

</style>
