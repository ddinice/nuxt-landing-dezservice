<template>
  <div class="grid grid-areas-hero grid-cols-12 grid-rows-[auto_auto_auto] md:grid-rows-[auto_auto] gap-7 mt-8 md:mt-16">
    <div class="col-span-12 row-start-1 md:col-span-6 xl:col-span-7 area-heading">
      <h1 class="relative">Захищаємо від
        <div class="relative">
          <Transition name="word" :duration="1550">
            <span :key="activeWord" class="block">{{ animetedWord[activeWord] }}</span>
          </Transition>
        </div>
        <span class="text-yellow-900">ваш Дім та Бізнес</span>.
      </h1>
      <p class="text-2xl whitespace-pre-line mt-4 font-[200] py-5">Дератизація, дезінсекція та дезінфекція.<br>Працюємо по всій Україні з гарантією результату.</p>
    </div>
    <div id="message" class="col-span-12 row-start-3 md:row-start-1 md:col-span-6 xl:col-span-4">
      <div class="w-full relative height-[4rem]">
        <div class="w-full relative md:absolute bg-black px-5 py-8 rounded-2xl">
          <div class="mb-8">
            <h2 class="text-white white whitespace-pre-line">Залишити заявку на<br />
              <span class="text-yellow">послугу</span>
            </h2>
          </div>
          <HeroForm />
        </div>
      </div>
    </div>
    <div class="col-span-12 h-[20rem] md:h-[37.5rem] overflow-hidden rounded-lg">
      <NuxtImg class="w-full h-[inherit] object-cover" src="/images/hero.jpg" />
    </div>
  </div>
</template>

<script setup lang="ts">
const activeWord = ref(0);
const animetedWord = ref([
  'шкідників',
  'гризунів',
  'паразитів',
  'грибку',
  'комах',
  'кліщів',
  'тарганів',
  'клопів'
]);

let wordInterval: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  wordInterval = setInterval(() => {
    activeWord.value = (activeWord.value + 1) % animetedWord.value.length;
  }, 3000);
});

onBeforeUnmount(() => {
  if (wordInterval) {
    clearInterval(wordInterval);
  }
});

</script>

<style scoped>
.word-enter-active,
.word-leave-active {
  transition: all 0.35s ease-out;
}

.word-enter-from {
  opacity: 0;
  transform: translateY(-30px);
  position: absolute;
}

.word-leave-to {
  opacity: 0;
  transform: translateY(30px);
  position: absolute;
}
</style>