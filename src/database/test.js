const Database = require('./db');
const createProffy = require('./createProffy');


// db dentro dos parênteses é o then que está passando
Database.then(async (db) => {
  // inserir dados

  proffyValue = {
    name: 'Diego Vespa',
    avatar: 'https://avatars0.githubusercontent.com/u/42758900?s=460&u=552cfbe3cfb27ae826e8121e193e694e1700cf49&v=4',
    whatsapp: '898766555',
    bio: 'IMussum Ipsum, cacilds vidis litro abertis. Manduma pindureta quium dia nois paga. nstrutor de Química'
  },
    classValue = {
      subject: 'Física',
      cost: '123',
      // proffy id virá pelo banco de dados
    },
    classScheduleValues = [
      // class_id virá pelo banco de dados após cadastrarmos a class
      {
        weekday: 2,
        time_from: 729,
        time_to: 1220
      },
      {
        weekday: 1,
        time_from: 729,
        time_to: 1220
      }
    ]
  await createProffy(db, { proffyValue, classValue, classScheduleValues })
  // consultar os dados inseridos

})