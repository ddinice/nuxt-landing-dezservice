<template>
  <div class="relative h-fit md:h-[100px] mt-8 md:mt-0 grid grid-cols-10">
    <div class="relative md:absolute bottom-0 col-span-12 flex items-center bg-black md:mx-8 rounded-xl overflow-hidden">
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
      title: 'Гарантія результату',
      text: 'Якщо шкідники повернуться впродовж гарантійного терміну – проводимо повторну обробку безкоштовно',
    },
    {
      icon: 'lucide:notepad-text',
      title: 'Комплексний підхід',
      text: 'Окрім знищення, проводимо профілактичне оброблення для запобігання повторній появі шкідників',
    },
    {
      icon: 'lucide:leaf',
      title: 'Безпечні засоби',
      text: 'Використовуємо сертифіковані препарати, які не шкодять вашому здоров’ю, дітям та домашнім тваринам',
    },
  ]
})
</script>