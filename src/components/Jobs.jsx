/* eslint-disable react/prop-types */


export const Jobs = ({jobs, jobSelect}) => {
  return (

    <div className='jobs-container'>
        {
            jobs.map((job) => (

                <div className='job'key={job.id}>
                    <div className="child1">                 
                        <div>
                             <img src={job.logo} alt="" />
                        </div>
                        <div>
                            <h2>{job.company}</h2>
                            <span>{job.featured? 'FEATURED ':''}</span>
                            <span>{job.new? ' NEW':''}</span>
                            <h3>{job.position}</h3> 
                            <span>{job.postedAt} . </span>
                            <span>{job.contract} . </span>
                            <span>{job.location}</span>
                        </div>
                    </div>

                   <div className="child2">
                        <button onClick={() => jobSelect(job.level)}>{job.level}</button>
                        <button onClick={() => jobSelect(job.role)}> {job.role}</button>
                        {
                        job.languages.concat(job.tools).map((ele, index) => (
                                <button onClick={() => jobSelect(ele)} key={index}>{ele}</button>
                        ))
                        }
                   </div>

                </div>

            ))
        }
    </div>

  )
}
