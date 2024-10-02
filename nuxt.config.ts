// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-i18n-micro',
    '@dargmuesli/nuxt-cookie-control',
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', dir: 'ltr' },
      { code: 'cs', iso: 'cz-CS', dir: 'ltr' },
    ],
    defaultLocale: 'cs',
    translationDir: 'locales',
    meta: false,
    autoDetectLanguage: true,
    disablePageLocales: true,
  },
})
