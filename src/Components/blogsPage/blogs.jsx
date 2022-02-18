// import { useState } from 'react';
import "./blogs.css";

import { blogs } from "../data";
let blog = blogs.slice(0, 3);

function Blogs() {
  return (
    <>
      <section className="blogs">
        <div className="container">
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
        </div>
      </section>
    </>
  );
}

export default Blogs;
