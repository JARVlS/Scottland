<template>
  <div class="layout">
    <h1 id="main_headline">Scotland, we are coming</h1>
    <Category
      v-if="data"
      v-for="category in data"
      :headline="category.Category"
      :ideas="category.ideas"
      :img_src="category.img_src"
    />
    <form class="input_container">
      <input
        v-model="add_category_input"
        type="text"
        id="add_category"
        required
      />
      <label for="add_category">Add Category...</label>
      <button class="add_idea" @click.prevent="submit_category">✓</button>
      <input
        ref="file"
        id="image_input"
        max="1"
        type="file"
        @change="handle_file"
        required
      />
      <label
        for="image_input"
        id="image_input_label"
        :class="file_count > 0 ? 'file_added' : ''"
        ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <title>Browse Files</title>
          <path
            d="M 6 2 C 4.9057453 2 4 2.9057453 4 4 L 4 20 C 4 21.094255 4.9057453 22 6 22 L 18 22 C 19.094255 22 20 21.094255 20 20 L 20 8 L 14 2 L 6 2 z M 6 4 L 13 4 L 13 9 L 18 9 L 18 20 L 6 20 L 6 4 z"
          />
        </svg>
      </label>
    </form>
  </div>
</template>

<script setup lang="ts">
import data from "~/assets/content.json";
import { Ref, ref, watch } from "vue";

const add_category_input: Ref<string> = ref("");
const file = ref();
const file_count = ref(0);

async function handle_file() {
  file_count.value = file.value.files.length;
}

async function upload_image() {
  console.log(file.value.files[0]);
  const fd = new FormData();
  fd.append("file", file.value.files[0]);
  console.log(fd);
  var ajaxRequest = new XMLHttpRequest();
  ajaxRequest.open("POST", "/api/image");
  ajaxRequest.send(fd);
}

async function submit_category() {
  await upload_image();

  data.push({
    Category: add_category_input.value,
    img_src: file.value.files[0].name,
    ideas: [],
  });
}
</script>

<style scoped>
#main_headline {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  text-shadow: 0 0 15px var(--blue_grotto);
  font-family: Cassandra;
  padding: 0 2rem;
}
.input_container {
  position: relative;
  margin: 1rem 0 2rem 0;
  min-width: 30%;
  margin-left: 3.5rem;
}

#image_input {
  display: none;
}
#image_input_label {
  cursor: pointer;
  position: absolute;
  width: 3rem;
  height: 3rem;
  left: -3.5rem;
  bottom: -0.5rem;
  border: 1px solid var(--neon_green);
  border-radius: 5px;
  transition: box-shadow 0.2s;
}
#image_input_label > svg {
  fill: var(--ivory);
  width: 100%;
  height: 100%;
}
.file_added {
  box-shadow: 0 0 15px var(--neon_green);
}
</style>
