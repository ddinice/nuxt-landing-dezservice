<template>
  <div class="py-6">
    <nav class="flex justify-between items-center">
      <div class="h-[1.4375rem] w-[9.375rem] lg:h-[2.5625rem] lg:w-auto">
        <a href="/#home">
          <p class="h3">DEZ Service.</p>
        </a>
      </div>
      <div @click="isOpen = !isOpen" class="w-[2.783125rem] h-[1.41125rem] lg:hidden flex justify-center items-center">
      </div>
      <div class="hidden lg:block">
        <ul class="h-full flex gap-7 justify-between items-center">
          <li><a href="/#home">Головна</a></li>
          <li><a href="/#we-are">Хто ми</a></li>
          <li><a href="/#why-we">Чому ми</a></li>
          <li><a href="/#cooperation">Співпраця</a></li>
        </ul>
      </div>
    </nav>
  </div>
  <transition 
    name="fade"
    @enter="start"
    @after-enter="end"
    @before-leave="start"
    @after-leave="end"
  >
    <div v-show="isOpen" class="overflow-hidden">
    <div
      class="top-16 left-0 w-full h-fit shadow-lg flex flex-col items-center gap-4 pt-4 pb-8 lg:hidden z-50"
    >
    <ul class="text-center flex flex-col gap-4">
      <li class="text-green body-1 font-medium"><a href="/#we-are">Чому ми</a></li>
      <li class="text-green body-1 font-medium"><a href="/#why-we">Наш досвід</a></li>
      <li class="text-green body-1 font-medium"><a href="/#faq">F.A.Q.</a></li>
    </ul>
    </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false);
const start = (el) => {
  el.style.height = el.scrollHeight +'px';
  el.style.background = 'transparent';
  requestAnimationFrame(() => {
    el.style.height = el.scrollHeight + 'px';
    el.style.background = '';
  });
};
const end = (el) => {
  el.style.height = "";
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  will-change: height, padding;
  transition: all 1s, padding 1s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  height: 0 !important;
  padding: 0 !important;
  background: transparent;
}
</style>