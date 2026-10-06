// Разбор даты из строки. Поддерживаются форматы ГГГГ-ММ-ДД и ДД.ММ.ГГГГ.

function parseDate(text) {
  const s = text.trim();
  let m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  if (m) {
    return { year: Number(m[1]), month: Number(m[2]), day: Number(m[3]) };
  }
  m = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(s);
  if (m) {
    return { year: Number(m[3]), month: Number(m[2]), day: Number(m[1]) };
  }
  return null;
}

module.exports = { parseDate };
