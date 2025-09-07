<template>
  <div class="grid grid-cols-12 grid-rows-[auto_auto] md:grid-rows-[auto] gap-y-12 md:gap-y-7 gap-x-7 mt-8 md:mt-20 mb-10 p-5 md:p-15 shadow-sm border-3 rounded-xl">
    <div class="col-span-12 md:col-span-5 row-start-3 md:row-start-1 flex flex-col gap-4">
      <p class="h2 font-[900]">DEZ Service.</p>
      <p class="text-xl md:text-2xl text-gray-900">ФОП «Щербатюк»</p>
      <p class="text-xl md:text-2xl text-gray-900">13601, вул. Перемоги 17, с. Ягнятин, Бердичівський р-н, Житомирська область</p>
    </div>
    <div class="col-span-12 md:col-span-4 row-start-2 md:row-start-1">
      <div class="flex gap-8 md:gap-16 flex-wrap md:flex-nowrap">
        <div>
          <p>Контакти</p>
          <div class="flex flex-col gap-3 mt-3 links">
            <p class="text-xl text-gray-900">+38 067 65 65 345</p>
            <p class="text-xl text-gray-900">v.shcherbatiuk@ukr.net</p>
            <a href="/#message">
              <p class="text-xl text-gray-900">Залишити заявку</p>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-12 md:col-span-4 row-start-1 md:row-start-1">
      <div class="flex gap-8 md:gap-16 flex-wrap md:flex-nowrap">
        <div>
          <p>Навігація</p>
          <div class="flex flex-col gap-3 mt-3 links">
            <a href="/#service">
              <p class="text-xl text-gray-900">Наші Послуги</p>
            </a>
            <a href="/#faq">
              <p class="text-xl text-gray-900">Про Нас</p>
            </a>
            <a href="/#faq">
              <p class="text-xl text-gray-900">FAQ</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.links p {
  width: fit-content;
  transition: 0.3s;
  cursor: pointer;
  border-bottom: 2px solid transparent;
}
.links p:hover {
  border-bottom: 2px solid #ffbf30;
}
.links p:hover{
  color: #000;
}
</style>