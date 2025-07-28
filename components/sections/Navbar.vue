<template>
  <div class="py-6">
    <nav class="flex justify-between items-center">
      <div class="h-[1.4375rem] w-[9.375rem] lg:h-[2.5625rem] lg:w-auto">
        <a href="/#">
          <p class="h3">DEZ Service.</p>
        </a>
      </div>
      <div @click="isOpen = !isOpen" class="relative w-8 h-8 lg:hidden border-2 border-black flex justify-center items-center">
          <Transition name="icon">
            <div v-if="isOpen" class="w-6 h-6 flex justify-center items-center flex-wrap">
              <Icon 
                name="lucide:plus"
                style="color: inherit; width: inherit; height: inherit; transform: rotate(45deg);"
              />
            </div>
            <div v-else="!isOpen" class="w-6 h-6 flex justify-center items-center flex-wrap">
              <Icon
                name="lucide:menu"
                style="color: inherit; width: inherit; height: inherit;"
              />
            </div>
          </Transition>
      </div>
      <div class="hidden lg:block">
        <ul class="h-full flex gap-7 justify-between items-center">
          <li><a href="/#home">Залишити заявку</a></li>
          <li><a href="/#we-are">Послуги</a></li>
          <li><a href="/#why-we">FAQ.</a></li>
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
      class="top-16 left-0 border-2 border-yellow w-full h-fit shadow-lg flex flex-col items-center gap-4 p-4 lg:hidden z-50"
    >
    <ul class="text-center flex flex-col gap-4">
      <li 
        v-for="item in data.links"
        @click="isOpen = !isOpen"
        class="text-green body-1 font-medium"
      >
        <a :href="item.url">{{ item.title }}</a>
      </li>
    </ul>
    </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false);

const data = {
  links: [
    {
      title: 'Залишити заявку',
      url: '/#message',
    },
    {
      title: 'Послуги',
      url: '/#service',
    },
    {
      title: 'FAQ.',
      url: '/#faq'
    }
  ]
};
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
  transition: all 0.5s, padding 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  height: 0 !important;
  padding: 0 !important;
  background: transparent;
}

.icon-enter-active,
.icon-leave-active {
  transition: all 0.35s ease-out;
}

.icon-enter-from {
  opacity: 0;
  transform: translateY(30px);
  position: absolute;
}

.icon-leave-to {
  opacity: 0;
  transform: translateY(-30px);
  position: absolute;
}
</style>