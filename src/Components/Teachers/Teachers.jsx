// import { useState } from 'react';
import './Teachers.css'
// import pexels from '../../Assets/Images/pexels-monstera-5997151.png'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import {teachers} from '../data'



function Teachers() {

    return (<>
 

       
        <section className="teachers">
            <div className="container">
      
                <ul className="teacher-wrapper">
     
              {teachers.map((e) => {
                        return (
   

                            <li key={e.id} className="teacher">
                                    <img src={e.teacher__img} alt="e" className="teacher__img" />
                                
                         <div className="text-wrpper">
                         <h3 className="teacher__name">{e.teacher__name}</h3>
                                <p className="teacher__description">{e.description}</p>
                                <b href="" className="teacher__company">"{e.company__name}" oila maktabi</b>
                         </div>
                            </li>
                        
                        )
                    })}

                </ul>
            </div>
           <div className="btn-wrapper">
           <button className="prev"></button>
            <button className="next"></button>
           </div>
        </section>

    </>)
}



export default Teachers;