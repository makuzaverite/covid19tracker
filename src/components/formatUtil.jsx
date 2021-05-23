export const formater = (number) => {
  return new Intl.NumberFormat().format(number)
}

export const formatDate = (date) => {
  const curr_date_string = new Date(date)
  return `
  ${handleNumberZero(curr_date_string.getDate())}/${handleNumberZero(
    curr_date_string.getMonth()
  )}/${handleNumberZero(curr_date_string.getFullYear())} ,
  ${handleNumberZero(curr_date_string.getHours())}:${handleNumberZero(
    curr_date_string.getMinutes()
  )}:${handleNumberZero(curr_date_string.getSeconds())}`
}

const handleNumberZero = (num) => {
  return num <= 9 ? `0${num}` : num
}
