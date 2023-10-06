import { useState } from 'react'
import data from '../helpers/data.json'
import './job-home.css'

import { Categories } from '../components/Categories'
import { Jobs } from '../components/Jobs'

export const JobHome = () => {

    const [jobs, setJobs] = useState(data)
    const [categorie, setCategorie] = useState([]) 

const jobSelect = (e) => {

    if(!categorie.includes(e)){
        setCategorie((previus) => [...previus,e])
    }

    console.log(e)

    let filterJob = jobs.filter(({languages, tools,level,role}) => {
        /* por cada recorrido me topo con un objeto y a cada objeto lo destructuro con las propiedades especificas
        y a todos ellos los concateno es decir los pongo en un array comun, es decir por cada recorrido que haga 
        creo un array comun para cada objeto y evaluo si en ese array comun esta incluido la categoria que el
        usuario valla seleccionando 
        */
       console.log(languages.concat(tools).concat(level).concat(role))
       return languages.concat(tools).concat(level).concat(role).includes(e)
    }
    )
    setJobs(filterJob)
    console.log(filterJob)
    console.log(categorie)
}

const deleteFilter = () => {
   setJobs(data)
   setCategorie([])
}


const deleteJob = (trabajo) => {
   /*  if(categorie.length < 1) setJobs(data) */
  
   let filterCategories =  categorie.filter(valor => valor!== trabajo)
  
  let arrayAuxiliar = []
  setCategorie(filterCategories)

        data.forEach((elemento) => {
            let concatenados = elemento.languages.concat(elemento.tools).concat(elemento.level).concat(elemento.role)
            console.log(filterCategories)
            console.log(concatenados)

            let contador = 0
            for (let i = 0; i < filterCategories.length; i++) {
                    concatenados.some(e => e == filterCategories[i])? contador++:''
                
            }
            if(contador == filterCategories.length){
                    arrayAuxiliar.push(elemento)
            }

        }) 
   
    setJobs(arrayAuxiliar)
}


  return (
        <div className='listing-job-filter-container'>
            <Categories categorie={categorie} deleteJob={deleteJob} deleteFilter={deleteFilter}/>
           
            <Jobs jobs={jobs} jobSelect={jobSelect}/>

        </div>
  )
}

/* 
let r = ['como','estas']
let x = ['gracias']
let n = ['hola']

let ad = ['estas','hola','como']

// evaluar si todos los elementos de ad estan incluidos en la concatenacion de los 3 arrays

let concatenado = r.concat(x).concat(n)
console.log(concatenado)
let count = []

for(let i = 0; i < ad.length; i++){

    if(concatenado.some(ele => ele == ad[i])) {
        count.push(concatenado[i])

    }

}  

 */
