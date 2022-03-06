import React, { useState, useEffect } from "react";
import "./Blogs.css";
import { Link } from "react-router-dom";

import { blogs } from "../data";
let blog = blogs.slice(0, 3);

function Blogs() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const res = await fetch("https://familyuz.herokuapp.com/api/v1/blogs", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (res.status == 200) {
      const request = await res.json();
      setData(request);
    }
  }, []);

  useEffect(() => {}, [data]);
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
            {blog.map(e => {
              return (
                <li key={e.id} className="blog-card">
                  <img
                    src={e.img}
                    alt="e"
                    className="blog-card__img"
                    width="100%"
                    height="100%"
                  />
                  <span className="text-wrapper">
                    <h3 className="blog-card__title">{e.title}</h3>
                    <time href="" className="blog-card__link">
                      {e.time} soat oldin
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
