
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import TitleSubTitle from "./shared/TitleSubTitle";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [foods, setFoods] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect( () => {
    fetch('https://taste-track-server.vercel.app/allFoods')
    .then(res => res.json())
    .then(data => {
        setFoods(data)
    })
  } ,[])
  



  // Open the lightbox with the clicked image
  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div className="container mx-auto p-4">
     <TitleSubTitle title={'Taste Through Pictures'} subTitle={'Discover the vibrant flavors and artistry of our dishes through our gallery. Every meal is a masterpiece worth savoring!'}></TitleSubTitle>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {foods.map((food, index) => (
          <img
            key={index}
            src={food.foodImage}
            alt={food.foodName}
            className="cursor-pointer rounded-lg shadow-md hover:shadow-lg transition duration-300"
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>

      {/* Lightbox for showing larger images */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={foods.map((food) => ({ src: food.foodImage }))}
        index={currentIndex}
      />
    </div>
  );
};

export default Gallery;
