<template>
  <div class="grid grid-cols-12 gap-7 mt-8 md:mt-16">
    <div class="col-span-7">
      <h1>Захищаємо ваш дім, <span class="text-yellow-900">позбуваючись</span> кожного шкідника.</h1>
    </div>
    <div class="col-span-4">
      <div class="w-full relative height-[4rem]">
        <div class="w-full absolute bg-black px-5 py-8 rounded-2xl">
          <div class="mb-8">
            <h2 class="text-white white whitespace-pre-line">Залишити заявку на<br />
              <span class="text-yellow">послугу</span>
            </h2>
          </div>
          <HeroForm />
        </div>
      </div>
    </div>
    <div class="col-span-12 h-[37.5rem] overflow-hidden rounded-lg">
      <NuxtImg class="w-full h-[inherit] object-cover" src="/images/hero.jpg" />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>