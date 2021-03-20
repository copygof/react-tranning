import i18next from 'i18next'

export const getLanguageCode = (lang = i18next.language) => {
  const langTag = lang.includes('-') ? lang.split('-')[0] : lang
  return langTag
}

export const selectLanguage = (
  value: { [key: string]: any },
  lang: string = i18next.language,
): any => {
  try {
    const langTag = lang.includes('-') ? lang.split('-')[0] : lang
    return value ? value[langTag] : ''
  } catch (error) {
    return ''
  }
}
