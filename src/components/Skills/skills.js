import React from 'react';
import './skills.css';
import SoftWare from '../../assets/webd.png';
import WebDesign from '../../assets/website-design.png';
import ML from '../../assets/ml.png';

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDescription">I am a skilled and passionate designer with experince in web development, software engineer and AI/ML engineer.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Designer</h2>
                    <p>"I am a versatile full-stack web developer specializing in the MERN stack, with a keen eye for design and proficient expertise in CSS, dedicated to crafting visually appealing and seamless websites."</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={SoftWare} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Software Developer</h2>
                    <p>"A software developer proficient in building robust applications and implementing efficient algorithms for optimized performance."</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={ML} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Machine Learning Engineer</h2>
                    <p>"A Machine Learning engineer skilled in working with data, implementing machine learning algorithms, and deriving valuable insights for informed decision-making."</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills