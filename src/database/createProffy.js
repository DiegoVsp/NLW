
module.exports = async function(db, { proffyValue, classValue, classScheduleValues }){
  // inserir dados na tabela de proffys
  const insertedProffy = await db.run(`
    INSERT INTO proffys (
      name,
      avatar,
      whatsapp,
      bio
    ) VALUES (
      "${proffyValue.name}",
      "${proffyValue.avatar}",
      "${proffyValue.whatsapp}",
      "${proffyValue.bio}"
    );
  `)
    const proffy_id = insertedProffy.lastID;

    // inserir dados na tabela classes
    const insertedClasses = await db.run(`
    INSERT INTO classes (
      subject,
      cost,
      proffy_id
    ) VALUES (
      "${classValue.subject}",
      "${classValue.cost}",
      "${proffy_id}"
    );
    `)
    const class_id = insertedClasses.lastID;
    // inserir dados na tabela class schedule
    const insertedAllClassScheduleValues = classScheduleValues.map((value)=>{
      return db.run(`
        INSERT INTO class_schedule (
          class_id,
          weekday,
          time_from,
          time_to
        ) VALUES (
          "${class_id}",
          "${value.weekday}",
          "${value.time_from}",
          "${value.time_to}"
        );
      `)
    })
    // aqui vou executar todos os db.runs() das clas_schedules
    await Promise.all(insertedAllClassScheduleValues)
}