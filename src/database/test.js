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
      subject: 1,
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
  // await createProffy(db, { proffyValue, classValue, classScheduleValues })
  // consultar os dados inseridos
  
  // todos os proffys
   const selectedProffys = await db.all("SELECT * FROM proffys")
  // console.log(selectedProffys)

  // consultar as classes de um determinado professor 
  // e trazer os dados do professor

  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.* 
    from proffys
    JOIN classes ON (classes.proffy_id = proffys.id) 
    WHERE classes.proffy_id = 1;
  `)
  // console.log(selectClassesAndProffys)

  // o horário que a pessoa trabalha, por exemplo, é das 8h as 18h
  // o horário do time_from (8h) precisa ser menor ou igual ao solicitado
  //  o time_to precisa ser acima

  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.* 
    FROM class_schedule 
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "2" 
    AND class_schedule.time_from <= "729" 
    AND class_schedule.time_to > "729";
  `)
    console.log(selectClassesSchedules)
})