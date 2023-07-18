export const formatDate = (date: Date | string) => {
  const year = new Date(date).getFullYear()
  const month = new Date(date).toLocaleString("default", { month: "long"})
  return `${month} ${year}`
}