import React, { useState, useEffect } from "react";
import "./Blogs.css";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/uz-latn";


function Blogs() {

  const [blogs, setBlogs] = useState([]);
blogs.reverse();
  let blog = blogs.slice(0, 3);

  


useEffect(() => {
  fetch('https://familyuz.herokuapp.com/api/v1/blogs')
  .then(res => res.json())
  .then(res => setBlogs(res.data))
},[blogs])
  return (
    <>
      <section className="blog">
        <div className="container">
          <h2 className="blog__title">BLOG</h2>
          <p className="blog__subtitle">
            Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium
          </p>

          <ul className="blog-card-wrapper">
            {blog && blog.map(e => {
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
          <Link to="/blogs" className="courses__btn">
            Barcha kurslar
          </Link>
        </div>
      </section>
    </>
  );
}

export default Blogs;
