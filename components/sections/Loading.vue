<template>
<Transition name="fade" mode="out-in" :duration="1000">
  <div v-if="!loaded" class="fixed inset-0 flex flex-col items-center justify-center bg-white gap-5 z-101">
    <div class="body-1 animate-pulse">Завантаження...</div>
  </div>
</Transition>
<Transition name="move" :duration="1500">
  <div v-if="runAnimation"
    class="wrapper w-full fixed top-[45%] left-[50%] transform-[translate(-50%,-50%)] lg:h-[2.5625rem] z-102">
    <div class="child w-[9.375rem] sm:w-fit absolute left-[50%] transform-[translate(-50%,0%)]">
      <p class="h3 font-[900] bg-white px-2 py-0.5 w-full border-2 border-black">DEZ Service.</p>
    </div>
  </div>
</Transition>
</template>

<script setup>
const loaded = ref(false);

const props = defineProps(['isLoaded']);

const runAnimation = computed(() => {
  return props.isLoaded;
})

watch(runAnimation, (state) => {
  if (!state) {
    setTimeout(() => loaded.value = true, 900)
  }
})
</script>

<style scoped>
.move-enter-active,
.move-leave-active,
.move-enter-active .child,
.move-leave-active .child {
  transition: all 1s ease;
}

.move-leave-to {
  top: 0;
  margin: 0 auto;
  padding: 24px 0;
}

.move-leave-to .child {
  left: 0;
  transform: translate(20px, 24px);
}

.wrapper {
  margin: 0 auto;
  max-width: calc(81rem + 1.25rem);
  padding-inline: calc(var(--spacing)* 5);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>