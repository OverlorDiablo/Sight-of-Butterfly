const getAssetUrl = (path: string) => {
  return new URL(`/src/${path}`, import.meta.url).href
}

export default getAssetUrl;