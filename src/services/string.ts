export const formatNumber = (n: number, f: number = 0): string => {
  if (n >= 1_000_000_000) {
    const power = Math.floor(Math.log10(n))
    const formatted = (n / Math.pow(10, Math.floor(power / 3) * 3)).toFixed(f)
    const suffix = getLetterSuffix(power)
    return formatted.endsWith('.0') ? formatted.slice(0, -2) + suffix : formatted + suffix
  } else if (n >= 1_000_000) {
    const formatted = (n / 1_000_000).toFixed(f)
    return formatted.endsWith('.0') ? formatted.slice(0, -2) + 'M' : formatted + 'M'
  } else if (n >= 1_000) {
    const formatted = (n / 1_000).toFixed(f)
    return formatted.endsWith('.0') ? formatted.slice(0, -2) + 'K' : formatted + 'K'
  } else {
    return n.toString()
  }
}

const getLetterSuffix = (power: number): string => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const index = Math.floor((power - 9) / 3)
  return index >= 0 && index < alphabet.length ? `B${alphabet[index]}` : 'Bz'
}
