import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { DEFAULT_LOCALE, isSupportedLocale } from '../i18n'

const LOCALE_STORAGE_KEY = 'natebell-locale'

export function getStoredLocale(): string | null {
  return localStorage.getItem(LOCALE_STORAGE_KEY)
}

export function storeLocale(locale: string) {
  localStorage.setItem(LOCALE_STORAGE_KEY, locale)
}

export function localePath(locale: string, hash = '') {
  const base = locale === DEFAULT_LOCALE ? '/' : `/${locale}`
  return hash ? `${base}#${hash}` : base
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home-en',
      component: HomeView,
      meta: { locale: 'en' },
    },
    {
      path: '/fr',
      name: 'home-fr',
      component: HomeView,
      meta: { locale: 'fr' },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: () => {
        const stored = getStoredLocale()
        return stored && isSupportedLocale(stored) ? localePath(stored) : '/'
      },
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

export default router
