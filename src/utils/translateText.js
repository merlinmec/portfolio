const CACHE_PREFIX = 'portfolio-translate:';

const cacheGet = (key) => {
  try {
    return window.localStorage.getItem(CACHE_PREFIX + key);
  } catch (e) {
    return null;
  }
};

const cacheSet = (key, value) => {
  try {
    window.localStorage.setItem(CACHE_PREFIX + key, value);
  } catch (e) {}
};

export const translateText = async (text, sourceLang, targetLang) => {
  if (!text) return text;

  const cacheKey = `${sourceLang}|${targetLang}|${text}`;
  const cached = cacheGet(cacheKey);
  if (cached) return cached;

  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Translation API error');

  const data = await res.json();
  const translated = data?.responseData?.translatedText;
  if (!translated) throw new Error('Empty translation');

  cacheSet(cacheKey, translated);
  return translated;
};
