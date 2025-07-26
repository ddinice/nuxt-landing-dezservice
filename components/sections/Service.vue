<template>
  <div class="grid grid-cols-12 mt-16 md:mt-24">
    <div class="col-span-10 md:col-span-6">
      <h2>
        {{ data.title.text_before }}
        <span class="text-yellow-900">{{ data.title.text_span }}</span>
        {{ data.title.text_after }}
      </h2>
    </div>
    <div class="col-span-12 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      <div class="" v-for="(item, index) in data.items" :key="index">
        <ServeiceCard :data="item"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const data = reactive({
  title: {
    text_before: 'Повний спектр послуг зі',
    text_span: 'знищення',
    text_after: 'шкідників для кожного випадку'
  },
  subtitle: {
    text: 'Надаємо професійні послуги для квартир, будинків, офісів і промислових обʼєктів з гарантією безпеки та результату.'
  },
  items: [
    {
      title: 'Знищення тарганів',
      text: 'Ефективно, без запаху і слідів: холодний туман і гель. Результат після першої обробки — без зайвих витрат',
      img: '/images/service_1.jpg',
      bg: 'bg-grey',
    },
    {
      title: 'Знищення клопів',
      text: 'Знищуємо клопів на всіх стадіях — навіть яйця. У 99% випадків вистачає однієї обробки. Самостійна боротьба лише ускладнює проблему',
      img: '/images/service_2.jpg'
    },
    {
      title: 'Знищення бліх',
      text: 'Блохи швидко розмножуються й шкодять і людям, і тваринам. Ми застосовуємо перевірені методи — без шансів для шкідників, миттєвий ефект!',
      img: '/images/service_3.jpg'
    },
    {
      title: 'Дератизація гризунів',
      text: 'Дератизація гризунів — ефективне знищення щурів і мишей із застосуванням професійних засобів',
      img: '/images/service_4.jpg'
    },
    {
      title: 'Дезінфекція',
      text: 'професійна обробка приміщень для знищення шкідливих вірусів, бактерій і грибків. Ефективно усуваємо джерела інфекцій та неприємні запахи',
      img: '/images/service_5.jpg'
    },
    {
      title: 'Залишите заявку на послугу',
      text: 'професійна обробка приміщень для знищення шкідливих вірусів, бактерій і грибків. Ефективно усуваємо джерела інфекцій та неприємні запахи',
      bg: 'bg-yellow',
    },
  ]
})
</script>