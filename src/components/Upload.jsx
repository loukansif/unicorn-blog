import React, { useState } from "react";

const Upload = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const HandleAdding = (e) => {
    e.preventDefault();
    const newArticle = { title, body };
    console.log(newArticle);
  };

  return (
    <div className="Upload">
      <form onSubmit={HandleAdding} action="">
        <fieldset>
          <legend>
            <h3> Créer un article </h3>
          </legend>
          <tr>
            <td>
              <label htmlFor="title">Le titre : </label>
            </td>
            <td>
              <input type="text" id="title" onChange={(e) => setTitle(e.target.value)}/>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="body">Le contenu : </label>
            </td>
            <td>
              <textarea id="body" cols="39" rows="4" onChange={(e) => setBody(e.target.value)}></textarea>
            </td>
          </tr>
        </fieldset>
        <button className="send-btn">Envoyer</button>
      </form>
    </div>
  );
};

export default Upload;
