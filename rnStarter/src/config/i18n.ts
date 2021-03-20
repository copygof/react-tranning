import * as dayjs from 'dayjs'
import 'dayjs/locale/en'
import 'dayjs/locale/th'
import i18n from 'i18next'
// @ts-ignore
import i18nextReactNative from 'i18next-react-native-language-detector'
import { initReactI18next } from 'react-i18next'
import { Platform } from 'react-native'
import { getLanguageCode } from '../utils/multiLanguage'

const resources = {
  en: {
    translation: require('../translations/en.json'),
  },
  th: {
    translation: require('../translations/th.json'),
  },
}

if (Platform.OS === 'ios') {
  i18n.language = 'en'
}

i18n
  .use(i18nextReactNative)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    keySeparator: ':',
  })
  .then(() => {
    dayjs.locale(getLanguageCode(i18n.language))
  })

i18n.on('languageChanged', (lng) => {
  dayjs.locale(getLanguageCode(lng))
})

export default i18n
