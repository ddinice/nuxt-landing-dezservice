<template>
  <div>
    <Loading :isLoaded="loading" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(true);

nuxtApp.hook("page:start", () => {
  loading.value = true;
});

nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>

<style scoped>
</style>
