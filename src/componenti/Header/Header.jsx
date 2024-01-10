import { header } from '../../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

function Header(){
    const { homepage, title } = header

  return (
    <div className='contHeader'>
      <div className='circle1'></div>
      <div className='circle2'></div>
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} className='link'>
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
    </div>
  )
}

export default Header