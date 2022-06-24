import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";

let posts = [];
const Articles = () => {
const [articles, setArticles] = useState([]);
const [search, setSearch] = useState("");

const handleCallback = (childData) => {
  setSearch(childData)
}

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setArticles(result);
      });
  }, []);
  if (!posts.length) {
    posts = articles;
  }
  let count = 0;
  return (
    <div className="Articles">
      {/* <Filter parentCallback={handleCallback} /> */}
      {posts.map(({ id, title, body }) => {
        if (count === 20) {
          return null;
        }
        count++;
        return (
          <div className="Article" key={id}>
            <h4>{title}</h4>
            <p>
              {body.substring(0, 60)}...{" "}
              <Link to={"/" + id}>afficher la suite</Link>
            </p>
          </div>
        );
       }
       )
      }
    </div>
  );
};

export default Articles;
