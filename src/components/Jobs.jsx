/* eslint-disable react/prop-types */


export const Jobs = ({jobs, jobSelect}) => {
  return (

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

  )
}
