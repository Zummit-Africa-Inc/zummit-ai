export const formatDate = (date: Date | string) => {
  const year = new Date(date).getFullYear()
  const month = new Date(date).toLocaleString("default", { month: "long"})
  return `${month} ${year}`
}

export const randomize = <T>(array: Array<T>) => {
  let m = array.length
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [array[m], array[i]] = [array[i], array[m]]
  }
  return array
}
