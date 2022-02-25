import React from "react";
import "./blogs.css";

//components
import Header from "../../Components/header/header";
import Footer from "../../Components/footer/footer";
import Blogss from "../../Components/blogsPage/blogs";
import Other from "../../Components/otherBlogs/other";

function Blogs() {
  return (
    <>
      <header>
        <Header />
      </header>

      <section>
        <Blogss />
        <Other />
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Blogs;
