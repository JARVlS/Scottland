<template>
  <NuxtLink id="navigate_home" to="/">HOME</NuxtLink>
  <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: Cassandra;
  src: url("/fonts/CassandraPersonalUseRegular-3BjG.ttf");
}

:root {
  --neon_green: #1dc690;
  --jelly_blue: #2ceef0;
  --blue: #0d1c2c;
  --blue_grotto: #278ab0;
  --ivory: #eaeae0;
}
*{
  background-color: var(--blue);

}
.layout {
  font-family: Calibri, sans-serif;
  height: 100vh;
  width: 100vw;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--ivory);
}

.input_container input {
  background-color: var(--blue);
  border: 1px solid var(--neon_green);
  border-radius: 5px;
  height: 2rem;
  font-size: 1.2rem;
  width: calc(100% - 1rem);
  margin: 0 0.5rem;
  padding: 0 2rem 0 1rem;
  outline: none;
  color: var(--ivory);
}

.input_container label {
  cursor: text;
  padding: 0 1rem;
  background-color: var(--blue);
  position: absolute;
  left: calc(5% + 0.5rem);
  bottom: 0.4rem;
  color: rgb(128, 128, 128);
  transition: bottom 0.2s, left 0.2s;
}
.input_container input:focus ~ label,
.input_container input:valid ~ label {
  bottom: 1.75rem;
  left: 0.2rem;
}

.add_idea {
  position: absolute;
  width: 2rem;
  height: calc(100%);
  bottom: 1px;
  right: calc(1px + 0.5rem);
  background-color: var(--neon_green);
  border: none;
  border-radius: 0 5px 5px 0;
  opacity: 0.2;
  cursor: no-drop;
  transition: opacity 0.2s, box-shadow 0.2s;
}

.input_container input:valid ~ button {
  cursor: pointer;
  opacity: 1;
  box-shadow: 0 0 15px var(--neon_green);
}
#navigate_home {
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  padding: 1rem 2rem;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.2rem;
  box-shadow: 0 0 15px var(--neon_green);
  border-radius: 5px;
  color: var(--ivory);
  background-color: var(--blue);
  z-index: 100;
  transition: color 0.2s, background-color 0.2s, box-shadow 0.2s;
}

#navigate_home:hover {
  color: var(--blue);
  background-color: var(--neon_green);
  box-shadow: 0 0 20px var(--neon_green);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}
.layout-leave-to{
  transform: translateX(-2rem);
}
.layout-enter-from{
  transform: translateX(2rem);
}
</style>
