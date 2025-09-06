<template>
  <div class="h-fit mt-8 md:mt-0 grid grid-cols-10">
    <div class="mt-5 py-11 px-5 col-span-12 flex items-center bg-black rounded-xl overflow-hidden">
      <Carousel
        :opts="{
        align: 'start',
        loop: true,
      }">
        <CarouselContent class="ml-0 md:-ml-4">
          <CarouselItem v-for="(item, index) in data.content" :index="index"
          class="px-0 md:pl-4 basis-1/1 md:basis-1/2 lg:basis-1/3 flex justify-center items-center flex-col text-center sm:px-5 py-8 gap-5">
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

const data = reactive({
  content: [
    {
      icon: 'lucide:lock',
      title: 'Досвід та професіоналізм',
      text: 'Понад 10 років успішної роботи з підприємствами харчової промисловості, ресторанами та торговими площами',
    },
    {
      icon: 'lucide:notepad-text',
      title: 'Міжнародні стандарти',
      text: 'Робота відповідно до вимог FSSC 22000, HACCP, ISO 22000, IFS, GMP, GLP, GHP',
    },
    {
      icon: 'lucide:leaf',
      title: 'Комплексний підхід',
      text: 'Повний цикл послуг від діагностики до регулярного моніторингу та ведення документації',
    },
    {
      icon: 'lucide:leaf',
      title: 'Професійне обладнання',
      text: 'Використання сучасних засобів: інсектицидних ламп, феромонних пасток, спеціалізованих хімічних препаратів',
    },
    {
      icon: 'lucide:leaf',
      title: 'Безпека',
      text: 'На відміну від самодіяльності, наші фахівці гарантують безпечне та ефективне застосування засобів',
    }
  ]
})
</script>