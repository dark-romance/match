const questionsData = [
  {
    id: 1,
    texto: "Me gusta saber que pasara, cuando no tengo el control de la situación tiendo a sentirme estresada.",
    perfiles: { florAcero: 2, reinaHielo: 5, sirenaCaos: 1 }
  },
  {
    id: 2,
    texto: "Cuando la situación se pone tensa, y reina el caos o la presión, yo mantengo la calma y tengo las ideas claras.",
    perfiles: { florAcero: 2, reinaHielo: 2, sirenaCaos: 5 }
  },
  {
    id: 3,
    texto: "Mis emociones son fuertes y fluyen con facilidad, esto hace que a menudo tome decisiones en base a mis sentimientos/corazonadas.",
    perfiles: { florAcero: 4, reinaHielo: 1, sirenaCaos: 2 }
  },
  {
    id: 4,
    texto: "Para mí es muy importante llevarme bien con las personas que quiero. Pensar en que estén molestos o decepcionados conmigo me entristece por todo el amor que les tengo.",
    perfiles: { florAcero: 2, reinaHielo: 5, sirenaCaos: 1 }
  },
  {
    id: 5,
    texto: "Mis emociones son tan fluidas y cambiantes que las personas a mi alrededor batallan en seguir el ritmo de mis sentimientos.",
    perfiles: { florAcero: 5, reinaHielo: 1, sirenaCaos: 2 }
  },
  {
    id: 6,
    texto: "Rara vez dejo que mis emociones tomen el control de mis decisiones, sin importar si son celos, enojo o tristeza.",
    perfiles: { florAcero: 1, reinaHielo: 2, sirenaCaos: 5 }
  },
  {
    id: 7,
    texto: "Prefiero compartir mí tiempo y momentos con amistades intimas y selectas por encima de conocer gran cantidad de personas nuevas.",
    perfiles: { florAcero: 2, reinaHielo: 1, sirenaCaos: 5 }
  },
  {
    id: 8,
    texto: "Cuando llego a un lugar nuevo me gusta destacar, me arreglo para lucir mi atractivo y despertar reacciones de las personas que me rodean.",
    perfiles: { florAcero: 2, reinaHielo: 5, sirenaCaos: 1 }
  },
  {
    id: 9,
    texto: "Me gusta escuchar atentamente y en silencio antes de expresar de forma clara, directa y concisa mi opinión.",
    perfiles: { florAcero: 5, reinaHielo: 1, sirenaCaos: 2 }
  },
  {
    id: 10,
    texto: "Las emociones latentes de mi entorno me permiten sentirme viva, la calma solo la quiero antes de entrar en una tormenta de emociones.",
    perfiles: { florAcero: 1, reinaHielo: 2, sirenaCaos: 5 }
  },
  {
    id: 11,
    texto: "Cuando trato con desconocidos me gusta dirigir la conversación para compartirles mi visión.",
    perfiles: { florAcero: 2, reinaHielo: 5, sirenaCaos: 1 }
  },
  {
    id: 12,
    texto: "Disfruto mucho de los espacios privados y en calma porque me permite conectar conmigo misma y disfrutarme.",
    perfiles: { florAcero: 5, reinaHielo: 1, sirenaCaos: 2 }
  },
  {
    id: 13,
    texto: "Me cuesta decir que 'no' porque soy muy consciente de lo mucho que pueden doler las palabras, y prefiero cuidar el corazón de los demás.",
    perfiles: { florAcero: 2, reinaHielo: 1, sirenaCaos: 5 }
  },
  {
    id: 14,
    texto: "Me gusta analizar las acciones de las personas antes de otorgarles mi confianza.",
    perfiles: { florAcero: 2, reinaHielo: 5, sirenaCaos: 1 }
  },
  {
    id: 15,
    texto: "Me gusta dejar en claro mis limites antes de que escale la situación o alguien tenga dudas sobre mí.",
    perfiles: { florAcero: 1, reinaHielo: 5, sirenaCaos: 2 }
  },
  {
    id: 16,
    texto: "Cuido el corazon, bienestar y amor de mi pareja con tanto esmero que aveces olvido de mi",
    perfiles: { florAcero: 5, reinaHielo: 1, sirenaCaos: 2 }
  },
  {
    id: 17,
    texto: "Mis gustos, mis intereses y mi tiempo son vitales para mí, y tengo límites claros al respecto que deben ser respetados.",
    perfiles: { florAcero: 2, reinaHielo: 5, sirenaCaos: 1 }
  },
  {
    id: 18,
    texto: "Las relaciones deben ser vibrantes y emocionantes aunque esto signifique tener conflictos menores.",
    perfiles: { florAcero: 5, reinaHielo: 1, sirenaCaos: 2 }
  },
  {
    id: 19,
    texto: "Me gusta tener orden en mi vida y planes a futuro, siento que tener lo contrario me causaría malestar emocional.",
    perfiles: { florAcero: 2, reinaHielo: 5, sirenaCaos: 1 }
  },
  {
    id: 20,
    texto: "Dejo fluir mis emociones y tomo decisiones guiada por mis corazonadas, con la certeza de que sabré resolver cualquier reto que surja.",
    perfiles: { florAcero: 3, reinaHielo: 1, sirenaCaos: 5 }
  },
  {
    id: 21,
    texto: "Me relaja, motiva y alegra lograr mis metas siendo disciplinada, eficiente y competente en todo lo que pueda.",
    perfiles: { florAcero: 2, reinaHielo: 5, sirenaCaos: 1 }
  },
  {
    id: 22,
    texto: "La vida es emocionante por todos los giros que da, las actividades repetitivas me restan energía  positiva.",
    perfiles: { florAcero: 1, reinaHielo: 2, sirenaCaos: 5 }
  },
  {
    id: 23,
    texto: "Para mí, un compromiso o promesa es muy importante; por eso siempre hago lo necesario para cumplirlo, aun cuando me exija más de lo planeado.",
    perfiles: { florAcero: 4, reinaHielo: 5, sirenaCaos: 2 }
  },
  {
    id: 24,
    texto: "Los planes, actividades o tareas de poca emoción para mí, no son tan importantes, por eso prefiero cambiarlas por otras que se ajusten a mí.",
    perfiles: { florAcero: 1, reinaHielo: 2, sirenaCaos: 5 }
  },
  {
    id: 25,
    texto: "Me siento protegida y atraída por mi pareja cuando me quita carga emocional tomando el las decisiones difíciles y/o importantes.",
    perfiles: { florAcero: 5, reinaHielo: 1, sirenaCaos: 2 }
  },
  {
    id: 26,
    texto: "Me atraen como pareja aquellas personas que no revelan todas sus cartas desde el inicio, aquellos que no sabes cuál es su siguiente jugada ni cuál es su pasado o sus secretos. Me parece emocionante la montaña rusa de emociones y sé que puedo con la tormenta que esto genera.",
    perfiles: { florAcero: 1, reinaHielo: 1, sirenaCaos: 5 }
  },
  {
    id: 27,
    texto: "Me atrae una pareja que su fuerza intelectual, emocional y física me desarme, logrando ver más allá de lo que a simple vista dejo ver.",
    perfiles: { florAcero: 3, reinaHielo: 5, sirenaCaos: 4 }
  },
  {
    id: 28,
    texto: "Explorar o arriesgarme en lugares desconocidos no me parece tan importante como construir y mantener mi lugar seguro.",
    perfiles: { florAcero: 5, reinaHielo: 3, sirenaCaos: 1 }
  },
  {
    id: 29,
    texto: "Prefiero un amor intenso y apasionado que me absorba el pensamiento, sobre uno estable donde ya conozca con certeza lo que pasará.",
    perfiles: { florAcero: 1, reinaHielo: 1, sirenaCaos: 5 }
  },
  {
    id: 30,
    texto: "Me atrapa un amor que permita el choque de nuestras personalidades, donde ambos deseamos absorber al otro, sin más límites ni reglas que las nuestras.",
    perfiles: { florAcero: 1, reinaHielo: 1, sirenaCaos: 5 }
  }
];
