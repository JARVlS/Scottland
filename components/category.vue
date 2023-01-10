<template>
  <div class="category" id="getting_there">
    <img class="picture_container" :src="props.img_src" />
    <h2 class="category_headline">{{ props.headline }}</h2>
    <NuxtLink
      :to="{ name: 'details-idea', params: { idea: idea[0] } }"
      class="ideas"
      v-for="idea in props.ideas"
      >{{ idea[0] }}</NuxtLink
    >
    <form class="input_container" @submit.prevent="submit_idea">
      <input
        v-model="add_idea_form"
        type="text"
        :id="props.headline + 'idea'"
        required
      />
      <label :for="props.headline + 'idea'">Add idea...</label>
      <button class="add_idea" type="submit">✓</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { isInDestructureAssignment } from "@vue/compiler-core";
import { Ref, ref, reactive } from "vue";
// import data from "~/assets/content.json";
// const { data } = await useAsyncData("body", async () => {
//   return queryContent().where({ _file: "content.json" }).findOne();
// });

const props = defineProps<{
  headline: string;
  img_src: string;
  ideas: Array<Array<string | Array<string>>>;
}>();

const emit = defineEmits<{
  (e: "update:ideas", value: Array<Array<string | Array<string>>>): void;
}>();

const add_idea_form: Ref<string> = ref("");

async function submit_idea() {
  if (add_idea_form.value.length > 0) {
    var ideas_new = props.ideas;
    ideas_new.push([add_idea_form.value, []]);
    emit("update:ideas", ideas_new);
    add_idea_form.value = "";
  }
}
</script>

<script></script>

<style scoped>
.category {
  margin: 2rem 0;
  padding: 2rem 2rem 4rem 2rem;
  border-radius: 5px;
  box-shadow: 0 0 15px var(--neon_green);
  min-width: 50%;
  max-width: 90vw;
  position: relative;
}
.category_headline {
  font-family: Cassandra;
}
.picture_container {
  width: 25%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  border-radius: 5px 0 0 5px;
}
.category_headline,
.ideas {
  display: inline-block;
  text-decoration: none;
  color: var(--ivory);
  margin-left: 25%;
  width: 75%;
}
.ideas {
  font-size: 1.2rem;
  padding: 1rem 1rem 1rem 2rem;
  position: relative;
}
.ideas::before {
  content: "";
  position: absolute;
  top: 0.75rem;
  left: 0;
  height: calc(100% - 1.5rem);
  width: 1rem;
  background-color: var(--jelly_blue);
}
.input_container {
  position: absolute;
  bottom: 0.5rem;
  right: 0;
  width: 50%;
}
</style>
