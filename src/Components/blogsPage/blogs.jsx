import "./blogs.css";
import React, {useState} from "react";

import moment from "moment";
import "moment/locale/uz-latn";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  blogs.reverse();
  let s = blogs.slice(0, 3);
  
fetch('https://familyuz.herokuapp.com/api/v1/blogs')
.then(res => res.json())
.then(res => setBlogs(res.data))


  return (
    <>
      <section className="blogs">
        <div className="container">
          <ul className="blog-card-wrapper">
            {s.map(e => {
              return (
                <li key={e.blog_id} id={e.blog_id} className="blog-card">
                  <img
                    src={e.blog_img}
                    alt="e"
                    className="blog-card__img"
                    width="100%"
                    height="100%"
                  />
                  <span className="text-wrapper">
                    <h3 className="blog-card__title">{e.blog_title}</h3>
                    <time className="blog-card__link">
                    {moment(e.blog_date).endOf('hour').fromNow()}
                    </time>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Blogs;
