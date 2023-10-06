/* eslint-disable react/prop-types */

import deleteButtom from '../../public/images/icon-remove.svg'
export const Categories = ({categorie, deleteJob, deleteFilter}) => {
  return (
    
    <div className='filtros-container'>
           {
              categorie.length > 0 && 
              ( 
                <div className='filtro'>
                
                      {categorie.map((ele, index) => (
                          <div className='categoria' key={index}>
                              <h1 >{ele}</h1>
                          
                              <img className='delete-button' src={deleteButtom} onClick={() => deleteJob(ele)} alt="" />
                          </div>
                      ))}

                        <button className='clear' onClick={deleteFilter}>clear</button>
                    
                </div>
              )
           }
   
    </div>
    
  )

}
