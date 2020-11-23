export const formatDate = (date: string): string => {
  const d = new Date(date)
  return `${d.getHours()}:${d.getMinutes()} ${
    d.getFullYear() - 2000
  }.${d.getMonth()}.${d.getDay()}`
}
