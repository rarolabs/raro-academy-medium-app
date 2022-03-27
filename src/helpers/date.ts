
const defaultDateFormat: Intl.DateTimeFormatOptions = {
  month: 'short',
  day: '2-digit',
  year: 'numeric'
};
export const formataData = (date: Date, format = defaultDateFormat) => {
  return Intl.DateTimeFormat(
    'pt-BR',
    format
  ).format(date);
}