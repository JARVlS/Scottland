<template>
  <div class="layout">
    <h1>
      {{ $route.params.idea }}
    </h1>
    <p class="details" v-for="idea in ideas[1]">{{ idea }}</p>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import data from "~/assets/content.json";
const route = useRoute();
const ideas: Ref<(string | string[])[]> = ref([]);

data.forEach((c) => {
  c.ideas.forEach((idea) => {
    if (idea[0] == route.params.idea) {
      ideas.value = idea;
    }
  });
});
</script>
