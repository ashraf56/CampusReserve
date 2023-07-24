import React from 'react';

import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';


const Gallery = () => {
const images = [
  {
    original: "https://www.salteffect.com/wp-content/uploads/2022/03/best-college-graduation-gifts-for-guys.jpg",
    thumbnail: "https://www.salteffect.com/wp-content/uploads/2022/03/best-college-graduation-gifts-for-guys.jpg",
  },
  {
    original: "https://images.unsplash.com/photo-1529739195191-4246f11b3382?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    thumbnail: "https://images.unsplash.com/photo-1529739195191-4246f11b3382?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    original: "https://images.unsplash.com/photo-1539413595691-37a09a48579b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    thumbnail: "https://images.unsplash.com/photo-1539413595691-37a09a48579b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    original: "https://images.unsplash.com/photo-1534009916851-7850ba974f9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    thumbnail: "https://images.unsplash.com/photo-1534009916851-7850ba974f9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    original: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    original: "https://bu.edu.bd/buPrev/wp-content/uploads//photo-gallery/Image00036.jpg",
    thumbnail: "https://bu.edu.bd/buPrev/wp-content/uploads//photo-gallery/Image00036.jpg",
  },
];

return (
<div className='container mx-auto my-20'> 
<h1 className=' md:text-4xl uppercase text-center font-extrabold py-9' >Capture the Moment: College Graduation Gallery</h1>

    <ImageGallery thumbnailPosition='left' showFullscreenButton={false}  items={images} />
</div>


)

};

export default Gallery;