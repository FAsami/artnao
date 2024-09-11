const mapsTabTitle: Record<string, string> = {
  '/admin': 'Dashboard'
}

const getTabTitle = (path: string): string => {
  console.log(path)
  if (mapsTabTitle[path]) {
    return mapsTabTitle[path]
  }

  const match = path.match(/\/([^\/]+)$/)
  return match ? match[1] : 'Tab'
}

export { getTabTitle }
