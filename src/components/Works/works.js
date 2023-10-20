import React from 'react'
import './works.css'
import todo from '../../assets/todo.png'
import credit from '../../assets/credit.png'
import movie from '../../assets/movierec.png'

// import Portfolio1 from '../../assets/portfolio-1.png'
// import Portfolio2 from '../../assets/portfolio-2.png'
// import Portfolio3 from '../../assets/portfolio-3.png'
// import Portfolio4 from '../../assets/portfolio-4.png'
// import Portfolio5 from '../../assets/portfolio-5.png'
// import Portfolio6 from '../../assets/portfolio-6.png'

const Works = () => {
  return (
    <section id='works'>
        <span className="worksTitle">My Projects</span>
        <span className="workDesc">I take pride in paying attention to the smallest details and experience to help business achieve their goals and create a strong online presence.</span>
        <div className="worksImgs">
            <div className="project">
            <h3 className='projectHeadings'>Movie Recommender System</h3>
            <img src={movie} alt="Project Img" className="worksImg" />
            {/* <a href='https://testing-76rl.onrender.com/'><button className="link"><h3>Movie Recommender System</h3></button></a> */}
            {/* <button type='submit' value='send' className="Links"><a href="http://testing-76rl.onrender.com/">Website</a></button> */}
            <a href="http://testing-76rl.onrender.com/"><button type='submit' value='send' className="Links">Website</button></a>
            </div>
            <div className="project">
            <h3 className='projectHeadings'>Todo List</h3>
            <img src={todo} alt="Project Img" className="worksImg" />
            {/* <a href='https://mrharish02.github.io/TODOS/'><button className="link"><h3>Todo List</h3></button></a> */}
            <button type='submit' value='send' className="Links"><a href="https://mrharish02.github.io/TODOS/">Website</a></button>
            </div>
            <div className="project">
            <h3 className='projectHeadings'>Credit Management System</h3>
            <img src={credit} alt="Project Img" className="worksImg" />
            {/* <a href='https://credit-management-system-ecxs.onrender.com/'><button className="link"><h3>Credit Management System</h3></button></a> */}
            <button type='submit' value='send' className="Links"><a href="https://credit-management-system-ecxs.onrender.com/">Website</a></button>
            </div>

            {/* <img src={Portfolio1} alt="Portfolio Img" className="worksImg" />
            <img src={Portfolio2} alt="Portfolio Img" className="worksImg" />
            <img src={Portfolio3} alt="Portfolio Img" className="worksImg" />
            <img src={Portfolio4} alt="Portfolio Img" className="worksImg" />
            <img src={Portfolio5} alt="Portfolio Img" className="worksImg" />
            <img src={Portfolio6} alt="Portfolio Img" className="worksImg" /> */}
        </div>
        {/* <button className="worksBtn">See More</button> */}
    </section>
  )
}

export default Works