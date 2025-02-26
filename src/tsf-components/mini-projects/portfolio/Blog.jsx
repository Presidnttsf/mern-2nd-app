import React from "react";
import { Link } from "react-router-dom";
const Blog = () => {


    return (
        <div id="blog-page">

            <h1>Blog page</h1>
            <h2>Checkout my awesome blogs </h2>
            <h3><a href='https://www.newtonschool.co/post/top-13-web-developer-interview-questions'>Web Development Interview questions</a></h3>
            <h3><a href='https://www.newtonschool.co/post/graph-data-structure-explained-with-examples' >Graph Data </a></h3>
            <Link to="/info">    <button id="blog-to-info"> Go to Info</button></Link>
            <Link to="/">     <button id="blog-to-home"> Go to Home</button></Link>
        </div>
    )
}

export default Blog