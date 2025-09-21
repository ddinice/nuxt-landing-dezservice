// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  css: ['~/assets/css/tailwind.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ['shadcn-nuxt', '@nuxt/image', '@nuxt/icon'],
  shadcn: {
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  app: {
    head: {
      title: 'Дератизація, Дезінсекція, Дезінфекція в Україні | Гарантія Результату',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Професійна дератизація, дезінсекція та дезінфекція по всій Україні. 10+ років досвіду, гарантія результату, обслуговування фізичних та юридичних осіб. Відповідаємо стандартам FSSC 22000, HACCP, ISO 22000, IFS, GMP, GLP, GHP.' },
        { name: 'keywords', content: 'дератизація, дезінсекція, дезінфекція, санітарна безпека, харчова промисловість, ресторанний бізнес, торгові площі, виробничі приміщення, Україна' },
        { name: 'author', content: 'ddinice' },
        { property: 'og:title', content: 'Дератизація, Дезінсекція, Дезінфекція в Україні | Гарантія Результату' },
        { property: 'og:description', content: 'Професійна дератизація, дезінсекція та дезінфекція по всій Україні. 10+ років досвіду, гарантія результату, обслуговування фізичних та юридичних осіб. Відповідаємо стандартам FSSC 22000, HACCP, ISO 22000, IFS, GMP, GLP, GHP.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://dezservis.com' },
        { property: 'og:image', content: '/hero.png' },
        { property: 'og:locale', content: 'uk_UA' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ],
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    }
  }
})