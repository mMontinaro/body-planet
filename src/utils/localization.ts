import copy from '../locales/it.json'

export function getLocalizedString(key: string): string {
  const value = key.split('.').reduce<unknown>((current, segment) => {
    if (typeof current !== 'object' || current === null) return undefined
    return (current as Record<string, unknown>)[segment]
  }, copy)

  return typeof value === 'string' ? value : key
}
