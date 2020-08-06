// Dados
const proffys = [
  {
    name: "Diego Vespa",
    avatar: "https://avatars0.githubusercontent.com/u/42758900?s=460&u=552cfbe3cfb27ae826e8121e193e694e1700cf49&v=4",
    whatsapp: "16997637131",
    bio: "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit.    Aenean sit amet nisi. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!",
    subject: "Matamática",
    cost: "25",
    weekday: [0],
    time_from: [340],
    time_to: [1200]
  },
  {
    name: "Mayk Brito",
    avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
    whatsapp: "169999999",
    bio: "Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit.    Aenean sit amet nisi. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!",
    subject: "English",
    cost: "35",
    weekday: [2],
    time_from: [340],
    time_to: [1200]
  }
]
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
function pageLanding(req, res) {
  return res.render("index.html")
}
function pageStudy(req, res) {
  const filters = req.query;
  return res.render("study.html", { proffys, filters, subjects, weekdays })
}
function pageGiveClasses(req, res) {
  const data = req.query;

  //se tiver
  const isNotEmpty = Object.keys(data).length != 0;
  if(isNotEmpty){
    data.subject = getSubject(data.subject)
    console.log(data)
    // adicionar dados a lista de proffys
    proffys.push(data)
    return res.redirect("/study")
  } 
  // se nao, mostrar a página  
  return res.render("give-classes.html", {subjects, weekdays})
}

// Servidor
const express = require('express');
const server = express();

// configurar nunjucks (template engine)
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

// Inicio e configuração do servidor
server
  // configurar arquivos estáticos (css, scripts, images)
  .use(express.static("public"))
  // rotas da aplicação
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  // start do servidor
  .listen(5500)


