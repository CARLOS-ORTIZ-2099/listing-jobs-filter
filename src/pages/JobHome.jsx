import { useState } from 'react'
import data from '../helpers/data.json'
import './job-home.css'
import deleteButtom from '../images/icon-remove.svg'

export const JobHome = () => {

    const [jobs, setJobs] = useState(data)
    const [categorie, setCategorie] = useState([]) 

const jobSelect = (e) => {

    if(!categorie.includes(e)){
        setCategorie((previus) => [...previus,e])
    }

    console.log(e)
    let filterJob = jobs.filter(({languages, tools,level,role}) => 
    /* por cada recorrido me topo con un objeto y a cada objeto lo destructuro con las propiedades especificas
       y a todos ellos los concateno es decir los pongo en un array comun, es decir por cada recorrido que haga 
       creo un array comun para cada objeto y evaluo si en ese array comun esta incluido la categoria que el
       usuario valla seleccionando 
    */
            languages.concat(tools).concat(level).concat(role).includes(e))
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
            <div className='filtros-container'>
                <div className='filtro'>
                    {categorie.map((ele, index) => (
                        <div className='categoria' key={index}>
                            <h1 >{ele}</h1>
                           {/*  <button >eliminar categoria</button> */}
                            <img className='delete-button' src={deleteButtom} onClick={() => deleteJob(ele)} alt="" />
                        </div>
                    ))}
                    {
                        categorie.length > 0 ? <button className='clear' onClick={deleteFilter}>clear</button>:''
                    }
                </div>
               
            </div>
           

            <div className='jobs-container'>
                {
                    jobs.map(({id,company, contract, languages,tools,level,role}) => (
                        <div className='job'key={id}>
                            <h1>{company}</h1>
                            <h2>{contract}</h2> 
                            <button onClick={() => jobSelect(level)}>{level}</button>
                            <button onClick={() => jobSelect(role)}> {role}</button>
                            {
                            languages.concat(tools).map((ele, index) => (
                                    <button onClick={() => jobSelect(ele)} key={index}>{ele}</button>
                            ))
                            }
                        </div>
                    ))
                }
            </div>
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
