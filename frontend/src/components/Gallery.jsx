import React, { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const gallery = [
    "/img1.webp",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/img5.jpg",
    "/img6.jpg",
  ];

  return (
    <section className="gallery">
      <div id="gallerytitle">
        <h1>BETTER BEATS BEST</h1>
      </div>
      <div className="images">
        {gallery.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="galleryImage"
            className="gallery-image"
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {/* Modal for full-screen image */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <span className="close">&times;</span>
          <img src={selectedImage} alt="FullScreen" className="modal-content" />
        </div>
      )}
    </section>
  );
};

export default Gallery;
