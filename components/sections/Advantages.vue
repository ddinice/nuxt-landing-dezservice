<template>
  <div class="relative h-[100px] grid grid-cols-10">
    <div class="absolute bottom-0 col-span-12 flex items-center bg-black mx-8 rounded-xl">
      <div 
        v-for="(item, index) in data.content"
        :index="index"
        class="flex justify-center items-center flex-col text-center px-5 py-8 gap-5"
      >
        <div class="w-12 h-12 text-yellow">
          <Icon 
            :name="item.icon" 
            style="color: inherit; width: inherit; height: inherit;"
          />
        </div>
        <p class="h3 text-white">{{ item.title }}</p>
        <p class="text-white">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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