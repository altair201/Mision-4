const ranking=[{nombre:'leidy', puntos:80 },
{nombre:'andrea', puntos:63},
{nombre:'valentina', puntos:55},
{nombre: 'Sergio', puntos:42},
{nombre:'ronald', puntos:38},
{nombre:'luis', puntos:30}]
let rankingact
rank.addEventListener('click',()=>{
    let contenido=''
    contenido=`<table><th>ranking inicial</th>`
    ranking.forEach((persona)=>{
     contenido+=`<tr><td>${persona.nombre}</td><td>${persona.puntos}</td></tr>`
    })
    contenido+=`</table>`
    document.getElementById('pantalla').innerHTML=contenido
})

rankact.addEventListener('click',()=>{
rankingact=[...ranking]
rankingact.pop()
rankingact.splice(3,1,({nombre:'sergio', puntos:69}))
rankingact.push({nombre:'yanires', puntos:93},{nombre:'gustavo', puntos:77},{nombre:'jamile', puntos:77},)
rankingact.sort((a, b) => b.puntos - a.puntos)
let contenido=''
contenido=`<table><th>Ranking actualizado</th>`
rankingact.forEach((personas)=>{
    contenido+=`<tr><td>${personas.nombre}</td><td>${personas.puntos}</td></tr>`
    })
contenido+=`</table>`
document.getElementById('pantalla').innerHTML=contenido
})

inver.addEventListener('click', ()=>{
    rankingact.reverse()
    let contenido=''
    contenido=`<table><th>nombres</th>`
    rankingact.forEach((personas)=>{
     contenido+=`<tr><td>${personas.nombre}</td><td>${personas.puntos}</td></tr>`
    })
    contenido+=`</table>`
    document.getElementById('pantalla').innerHTML=contenido
    rankingact.reverse()
})

prom.addEventListener('click',()=>{
    let prome=0
    let promedio=0
    let puntos=rankingact.map(punto=>punto.puntos)
    puntos.forEach(puntos=>{
        prome+=puntos
    })
    promedio=prome/rankingact.length
    let contenido=''
    contenido=`<table><th>Promedio</th>`
    contenido+=`<tr><td>${promedio}</td></tr>`
    contenido+=`</table>`
    document.getElementById('pantalla').innerHTML=contenido
})

puntaje.addEventListener('click',()=>{
    rankingact.pop()
    let contenido=''
    contenido=`<table><th>Ranking Mayores a 50 puntos</th>`
    rankingact.forEach((personas)=>{
     contenido+=`<tr><td>${personas.nombre}</td><td>${personas.puntos}</td></tr>`
    })
    contenido+=`</table>`
    document.getElementById('pantalla').innerHTML=contenido
    rankingact.push({nombre:'ronald', puntos:38})
})
nuevo.addEventListener('click',()=>{
    rankingact.push({nombre:'luis', puntos:(30*1.3)})
    ranking.sort((a, b) => b.puntos - a.puntos)
    let contenido=''
    contenido=`<table><th>Ranking actual</th>`
    rankingact.forEach((personas)=>{
    contenido+=`<tr><td>${personas.nombre}</td><td>${personas.puntos}</td></tr>`
    })
    contenido+=`</table>`
    document.getElementById('pantalla').innerHTML=contenido
})

acerca.addEventListener('click',()=>{
    let contenido=''
    contenido=`<table><th>Acerca de</th>`
    contenido+=`<tr><td>"Mision #4 actualizacion y reorganizacion de una lista de una competencia"</td></tr>`
    contenido+=`</table>`
    document.getElementById('pantalla').innerHTML=contenido
})