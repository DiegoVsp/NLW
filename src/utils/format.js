const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química",
]
const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
]

// Funcionalidades
function getSubject(subjectNumber) {
  // loop.index começa no 1, então...
  const position = +subjectNumber - 1
  return subjects[position]
}

function convertHoursToMinutes(time) {
  // separando horas de minutos
  const [hour, minutes] = time.split(":")
  // convertendo hora em minutos
  return Number((hour * 60)+ minutes);
}

module.exports = {
  subjects,
  weekdays,
  getSubject,
  convertHoursToMinutes
}