<template>
  <table :class="[tableClass]">
    <thead>
      <tr>
        <th v-for="(header, index) in headers" :key="`header ${index}`">
          {{ header.value }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in items" :key="`row ${rowIndex}`">
        <td v-for="(header, headerIndex) in headers" :key="`header ${headerIndex}`">
          {{ row[header.value] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import type { Header, Item } from '../../types/main';

import { toRefs, PropType } from 'vue';

const props = defineProps({
  items: {
    type: Array as PropType<Item[]>,
    required: true,
  },
  headers: {
    type: Array as PropType<Header[]>,
    required: true,
  },
  tableClass: {
    required: false,
    type: String,
    default: '',
  },
});

const { items, headers, tableClass } = toRefs(props);
</script>
