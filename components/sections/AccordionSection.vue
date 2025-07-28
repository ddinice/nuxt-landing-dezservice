<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Plus } from 'lucide-vue-next';

const items = [
  {
    title: 'Скільки триває процедура дезінфекції?',
    text: 'Залежно від площі приміщення — від 30 хвилин до 2 годин. Наші спеціалісти працюють швидко та ефективно.',
  },
  {
    title: 'Чи потрібно залишати приміщення під час обробки?',
    text: 'Так, рекомендується покинути приміщення на час дезінфекції та повернутись через 2–4 години (точний час повідомить майстер).',
  },
  {
    title: 'Чи безпечна дезінфекція для дітей і тварин?',
    text: 'Так, ми використовуємо сертифіковані засоби, безпечні для людей і домашніх улюбленців після повного висихання.',
  },
  {
    title: 'Чи залишає обробка запах або плями?',
    text: 'Ні, засоби не мають різкого запаху та не залишають слідів на меблях чи поверхнях.',
  },
  {
    title: 'Які віруси та бактерії знищуються під час дезінфекції?',
    text: 'Ми обробляємо приміщення від збудників грипу, COVID-19, туберкульозу, кишкових інфекцій, грибків і цвілі.',
  },
  {
    title: 'Як часто потрібно проводити дезінфекцію?',
    text: 'Для профілактики — 1 раз на місяць або щокварталу. У разі спалаху інфекцій — негайно.',
  },
  {
    title: 'Чи видаєте ви сертифікати після обробки?',
    text: 'Так, для бізнесу та установ надаємо офіційні акти виконаних робіт.',
  },
  {
    title: 'Скільки коштує дезінфекція?',
    text: 'Ціна залежить від площі та типу приміщення. Ми запропонуємо точну вартість після безкоштовної консультації.',
  },
];

</script>

<template>
  <div id="faq" class="mt-8 md:mt-16 bg-black rounded-xl p-8 md:p-16">
    <Accordion type="single" collapsible>
      <h2 class="text-white mb-8">
        FAQ: Часті питання про 
        <span class="text-yellow">дезінфекцію</span>
      </h2>
      <AccordionItem v-for="item in items" :key="item.title" :value="item.text">
        <AccordionTrigger 
          class="text-white [&[data-state=open]>div>svg]:rotate-45 [&[data-state=open]>div>svg]:text-yellow"
        >
          <p class="body-1">{{ item.title }}</p>
          <template v-slot:icon>
            <div class="bg-white w-8 h-8 flex shrink-0 justify-center items-center duration-5000">
              <Plus class="w-5 h-5 transition-transform text-black" />
            </div>
          </template>
        </AccordionTrigger>
        <AccordionContent class="text-white">
          <p class="body-2">{{ item.text }}</p>
        </AccordionContent>
    </AccordionItem>
  </Accordion>
  </div>
</template>