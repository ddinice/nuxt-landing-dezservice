<template>
  <div class="h-10 sm:h-fit py-6 sm:py-0">
    <div class="sm:py-6 fixed sm:relative z-100 sm:w-full w-[calc(100%-2.5rem)]">
      <nav class="flex justify-between items-center">
        <div class="w-[9.375rem] lg:h-[2.5625rem] lg:w-auto">
          <a href="/#">
            <p class="h3 font-[900] bg-white px-2 py-0.5 w-full border-2 border-black">DEZ Service.</p>
          </a>
        </div>
        <div @click.stop="handleOpen" class="bg-white z-100">
          <div class="relative w-8 h-8 lg:hidden border-2 border-black flex justify-center items-center">
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
  </div>
  <transition 
    name="fade"
    @enter="start"
    @after-enter="end"
    @before-leave="start"
    @after-leave="end"
  >
    <div v-show="isOpen" ref="drawer" class="w-[calc(100%-2.5rem)] fixed top-[80px] bg-white z-100 overflow-hidden">
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
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false);
const drawer = ref(null);

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

const handleOpen = () => {
  isOpen.value = !isOpen.value;
}

const handleClickOutside = (event) => {
  if (drawer.value && !drawer.value.contains(event.target)) {
    isOpen.value = false
  }
}

const handleScroll = () => {
  isOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('scroll', handleScroll)
})
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