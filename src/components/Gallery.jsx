/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, Outlet } from 'react-router-dom';

const Gallery = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setGallery(result);
      });
  }, []);

  let count = 0;
  return (
    <div className="Gallery">
      {
      gallery.map((photo) => {
        if (count === 20) {
          return null;
        }
        count++;
        return (
          <div className="Picture" key={photo.id}>
            <h3>{photo.title}</h3>
            <img src={photo.thumbnailUrl} alt="" />
          </div>
        );
      })
      }
    </div>
  );
};

export default Gallery;