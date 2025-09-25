const CACHE_KEY = 'investment-toolkit-cache-v1';

function loadCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch (error) {
    console.warn('Failed to load cache', error);
    return {};
  }
}

let cache = loadCache();

function persist() {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch (error) {
    console.warn('Failed to persist cache', error);
  }
}

export function getCache(key) {
  const entry = cache[key];
  if (!entry) return null;
  if (entry.expireAt && entry.expireAt < Date.now()) {
    delete cache[key];
    persist();
    return null;
  }
  return entry.value;
}

export function setCache(key, value, ttlMs) {
  cache[key] = {
    value,
    expireAt: ttlMs ? Date.now() + ttlMs : null,
  };
  persist();
}

export function clearCache() {
  cache = {};
  persist();
}
