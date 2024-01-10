import { projects } from '../../../portfolio'
import './Projects.css'

function Projects(){
 
  if (!projects.length) return null;

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Progetti</h2>
      <div className='projects__grid'>
        {projects.map((project, index) => (
          <div key={index}>
          <div className='flip-card' >
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <div className='titleCard'>
                  <h3 style={{ paddingTop:'5px',paddingBottom:'5px' }}>{project.name}</h3>
                </div>
              <p style={{marginBottom:'10px', marginTop:'15px' }}>{project.description}</p>
              <h5>COMPETENZE ACQUISITE:</h5> 
              <h6 style={{ textAlign: 'center' }}>{project.stack.join(', ')}</h6> <br />
              </div>
              <div className="flip-card-back">
                  {project.imageSrc && (
                    <a href={project.livePreview} target="_blank" rel="noopener noreferrer">
                      <img src={project.imageSrc} alt={project.name} style={{ width: '300px', height: '300px' }} />
                    </a>
                  )}
                </div>
        </div>
        </div>
        </div>
        ))}
      </div>
    </section>
  );
  
}
export default Projects