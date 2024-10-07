import React, { useState } from "react";
import img1 from "../Image Gallery/Images/image1.jpg";
import img2 from "../Image Gallery/Images/image2.jpg";
import img3 from "../Image Gallery/Images/image3.jpg";
import img4 from "../Image Gallery/Images/image4.jpg";
import img5 from "../Image Gallery/Images/image5.jpg";
import "./imagegallery.css";
const ImageGaller = () => {
  const imageArray = [img1, img2, img3, img4, img5];
  let [index, setIndex] = useState(0);
  const incrementIndex = (i) => {
    if (i === imageArray.length - 1) {
      setIndex(0);
    } else {
      setIndex(i + 1);
    }
  };
  const decreementIndex = (i) => {
    if (i === 0) {
      setIndex(imageArray.length - 1);
    } else {
      setIndex(i - 1);
    }
  };
  return (
    <div className="maindiv">
      <button className="leftbutton" onClick={() => incrementIndex(index)}> &#8592;</button>
      <div>
        {
          <img
            src={imageArray[index]}
            className="image"
            alt={`Gallery image ${index + 1}`}
          />
        }
      </div>
      <button className="rightbutton" onClick={() => decreementIndex(index)}> &#8594;</button>
    </div>
  );
};

export default ImageGaller;
