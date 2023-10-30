<template>
  <IcaDataTable class="dataTable" :headers="headers" :items="items" />
</template>

<script lang="ts" setup>
import IcaDataTable from '../components/IcaDataTable.vue';
import { Header, Item } from '../../types/main';

const headers: Header[] = [
  {
    text: 'Fruit',
    value: 'fruit',
  },
  {
    text: 'Sales',
    value: 'sales',
  },
];

const items: Item[] = [
  {
    fruit: 'Tomato',
    sales: 30,
  },
  {
    fruit: 'Orange',
    sales: 20,
  },
];
</script>

<style lang="scss">
.dataTable {
  border-collapse: collapse;

  table,
  th,
  td {
    border: 1px solid;
  }
}
</style>
