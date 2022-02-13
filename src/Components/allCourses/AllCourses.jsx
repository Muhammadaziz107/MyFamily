// import { useState } from 'react';
import '../Courses/Courses.css'
// import pexels from '../../Assets/Images/pexels-monstera-5997151.png'
import {courses} from '../data'



function Courses() {



    return (<>
        <section className="courses">
            <div className="container">
                <h2 className="courses__title">Bizning kurslar</h2>
                <p className="courses__subtitle">Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>

                <ul className="card-wrapper">
                    {courses.map((e) => {
                        return (
                            <li key={e.id} className="card">
                                <div className="img-wrapper">
                                    <span className="card__btn">{e.author}</span>
                                    <img src={e.image} alt="e" className="card__img" />
                                </div>
                                <h3 className="card__title">{e.title}</h3>
                                <p className="card__description">{e.subtitle}</p>
                                <a href="/" className="card__link">Batafsil</a>
                            </li>
                        )
                    })}

                </ul>
            </div>
        </section>
      
    </>)
}



export default Courses;