<template>
  <div class="h-fit mt-8">
    <div class="mt-5 py-11 md:px-5 flex items-center bg-black rounded-xl overflow-hidden">
      <Carousel
        ref="carousel"
        class="relative w-full max-w-full"
        :opts="{
          align: 'start',
          loop: true,
        }"
        @init-api="setCarouselApi"
      >
        <CarouselContent class="ml-0">
          <CarouselItem v-for="(item, index) in data.content" :index="index"
          class="px-0 md:pl-4 md:basis-1/2 lg:basis-1/3 flex justify-center items-center flex-col text-center sm:px-5 py-8 gap-5">
            <div class="w-12 h-12 text-yellow">
              <Icon 
                :name="item.icon" 
                style="color: inherit; width: inherit; height: inherit;"
              />
            </div>
            <p class="h3 text-white">{{ item.title }}</p>
            <p class="text-white max-w-[80%]">{{ item.text }}</p>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const carousel = ref()
let carouselApi: any = null
let autoScrollTimer: NodeJS.Timeout | null = null

const setCarouselApi = (api: any) => {
  carouselApi = api
  if (api) {
    startAutoScroll()
  }
}

const startAutoScroll = () => {
  autoScrollTimer = setInterval(() => {
    carouselApi?.scrollNext()
  }, 3000)
}

onUnmounted(() => {
  if (autoScrollTimer) {
    clearInterval(autoScrollTimer)
  }
})

const data = reactive({
  content: [
    {
      icon: 'lucide:blocks',
      title: 'Досвід та професіоналізм',
      text: 'Понад 10 років успішної роботи з підприємствами харчової промисловості, ресторанами та торговими площами',
    },
    {
      icon: 'lucide:notepad-text',
      title: 'Міжнародні стандарти',
      text: 'Робота відповідно до вимог FSSC 22000, HACCP, ISO 22000, IFS, GMP, GLP, GHP',
    },
    {
      icon: 'lucide:list-checks',
      title: 'Комплексний підхід',
      text: 'Повний цикл послуг від діагностики до регулярного моніторингу та ведення документації',
    },
    {
      icon: 'lucide:wrench',
      title: 'Професійне обладнання',
      text: 'Використання сучасних засобів: інсектицидних ламп, феромонних пасток, спеціалізованих хімічних препаратів',
    },
    {
      icon: 'lucide:lock',
      title: 'Безпека',
      text: 'На відміну від самодіяльності, наші фахівці гарантують безпечне та ефективне застосування засобів',
    }
  ]
})
</script>