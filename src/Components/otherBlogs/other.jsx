import moment from "moment";
import "moment/locale/uz-latn";
import { NavLink } from "react-router-dom";
import "./other.css";
import React, {useState} from "react";
function Other() {

  
  const [blogs, setBlogs] = useState([]);

  
fetch('https://familyuz.herokuapp.com/api/v1/blogs')
.then(res => res.json())
.then(res => setBlogs(res.data))

  return (
    <div className="other-blogs-wrapper">
      <div className="container">
      <ul className="other-blogs">
         {blogs && blogs.map(e => (
               <li className="other-blogs__box" key={e.blog_id} id={e.blog_id}>
               <img
                 className="other-blogs__img"
                 src={e.blog_img}
                 alt="otherBlogs img"
                 width="345"
                 height="200"
               />
   
               <h5 className="other-blogs__box__heading">
                 {e.blog_title}
               </h5>
   
               <div className="other-blogs__box__div">
                 <p className="other-blogs__box__time">{moment(e.blog_date).endOf('hour').fromNow()}
</p>
                 <p className="other-blogs__box__time">{e.blog_time} min o'qiladi</p>
               </div>
             </li>
         ))}   
          </ul>
        
          <NavLink to="/" className="courses__btn other-blogs__btn">
            Barcha kurslar
          </NavLink>
        </div>
       </div>
    
  );
}

export default Other;
