import React, { useState } from "react";

const Upload = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');


  const HandleAdding = (e) => {
    e.preventDefault();
    const newArticle = {title, body};
    console.log(newArticle);
    
  }

  return (
    <div className="Upload">
      <form onSubmit ={HandleAdding} action="">
        <fieldset>
          <legend>
            <h3> Créer un article </h3>
          </legend>
          <label htmlFor="title">Le titre : </label>
          <input type="text" id="title" onChange={ (e) => setTitle(e.target.value)}/>
          <p>
            <label htmlFor="body">Le contenu :</label>
            <textarea id="body" cols="40" rows="4" onChange={ (e) => setBody(e.target.value)}></textarea>
          </p>
        </fieldset>
        <button className="send-btn">Envoyer</button>
      </form>
      <div>
        
      </div>
    </div>
  );
};

export default Upload;
