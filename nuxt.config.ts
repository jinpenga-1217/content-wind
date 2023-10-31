export default defineNuxtConfig({
  app: {
    // NUXT_APP_BASE_URL
    // baseUrl: 'http://localhost:8081/',
    head: {
      title: process.env.NUXT3_TITLE ?? 'JPA Docs',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    keepalive: true
  },
  extends: 'content-wind',
  nitro: {
    compressPublicAssets: true
  },
})
