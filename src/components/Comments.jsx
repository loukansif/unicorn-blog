import React from "react";
import { useState, useEffect } from "react";

function Comments(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const idPost = props.id;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="Comments">
      <h4>Commentaires</h4>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      {data &&
        data.map(({ id, name, email, body, postId }) =>
          postId === idPost ? (
            <div className="Comment" key={id}>
              <div>Nom : {name}</div>
              <div>
                Email : {email}
                <br />
                {body}
              </div>
              <hr />
            </div>
          ) : null
        )}
    </div>
  );
}

export default Comments;
