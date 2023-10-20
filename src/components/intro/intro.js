import React from 'react'
import './intro.css'
import bg from '../../assets/background.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <section id="intro">
         <div className="introContent">
            <span className="hello">
                Hello,
            </span>
            <span className="introText">
                I'm <span className="introName">Harish Choudhary</span>
                <br />
                Website Developer
                <br />
                Software Engineer
                <br />
                AI/ML Engineer
                <p className="introPara">
                    I am skilled web designer, software engineer and AI/ML engineer.
                </p>
                <Link><button className="btn"><img src={btnImg} alt="Hire me" className='btnImg'/>Hire me</button></Link>
            </span>
         </div>
         <img src="" alt="profile" className='bg' />
    </section>
  )
}

export default Intro