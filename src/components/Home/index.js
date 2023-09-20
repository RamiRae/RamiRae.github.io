import { useEffect, useState } from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/Logo-s.png'
import Logo from './Logo'
import './index.scss'


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [text] = useTypewriter({
    words:['UI/UX Designer','Frontend Developer'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:40,
  })

  const nameArray = ['a', 'm', 'a', 'd', 'a', 'n',',']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]
  
  useEffect(() => {
     setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          
          <h2>
            <span style={{fontWeight:'bold', color:'#ffd700', margin: '5px'}}>
            {text}
            </span>
            </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
