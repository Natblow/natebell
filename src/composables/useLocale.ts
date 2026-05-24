import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import { DEFAULT_LOCALE, type SupportedLocale } from '../i18n'
import { localePath, storeLocale } from '../router'

export function useLocale() {
  const { locale } = useI18n()
  const route = useRoute()
  const router = useRouter()

  function syncLocaleFromRoute() {
    const routeLocale = route.meta.locale as SupportedLocale | undefined
    if (routeLocale) {
      locale.value = routeLocale
      storeLocale(routeLocale)
    }
  }

  function switchLocale(nextLocale: SupportedLocale) {
    locale.value = nextLocale
    storeLocale(nextLocale)
    router.push({
      path: localePath(nextLocale),
      hash: route.hash || undefined,
    })
  }

  watch(
    () => route.meta.locale,
    () => syncLocaleFromRoute(),
    { immediate: true },
  )

  return {
    locale,
    switchLocale,
    otherLocale: () => (locale.value === DEFAULT_LOCALE ? 'fr' : 'en') as SupportedLocale,
  }
}
