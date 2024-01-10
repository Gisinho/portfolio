import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn' 
import { about } from '../../../portfolio'
import './About.css'

function About(){
    const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
{/*       <img src={image} alt='Profile' className='about__image'/> */}
      {/* Aggiunta del cerchio */}
      
      {name && (
        <h1>
           <span className='about__name'>{name}.</span>
        </h1>
      )}
      
      {role && <h2 className='about__role'>{role}.</h2>}
      
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Il mio Cv
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
   
  )
}



export default About