import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments"

function Article() {
  const [article, setArticle] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/`+id)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setArticle(result);
      });
  }, [id]);

  return (
    <div className="Articles">
          <div className="Article" key={article.id}>
            <h4>{article.title}</h4>
            <p>{article.body}</p>
          </div>
          <Comments id={article.id}/>
    </div>    
  );
}

export default Article;
