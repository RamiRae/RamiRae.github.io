import { useEffect, useState } from 'react'
import {
  faFigma,
  faCss3,
  faVuejs,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a computer engineer with a BSc degree from Bahirdar University.
          </p>
          <p align="LEFT">
            
           I am an enthusiastic UI/UX designer and frontend developer eager to contribute to
team success through hard work, attention to detail and
excellent organizational skills, motivated to learn, grow and
add variety in any work environment i get involved with.
I've worked on Range of projects including machine learning (AI),
Front end development and full stack system development.
          </p>
          <p>
            If I need to define myself in one sentence that would be a creative minded, a sports fanatic,
            food enthusiast, and tech-obsessed, movie fan!!!
          </p>
          <a className="button" href='Ramadan Aliyu CV.pdf' download='CV.pdf'>Download CV</a>
        </div>


        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faFigma} color="#A259FF" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faVuejs} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
