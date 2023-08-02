import React from 'react';

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./Review.css"
import axios from 'axios';
import { useQuery } from 'react-query';


const Review = () => {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 5 },
      },
      "(min-width: 1200px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  })
  let {data:reviews=[],isLoading,refetch}=useQuery( 
    ['college'],
   async()=>{
        let res= await axios.get(`https://campusreserve-server.onrender.com/college`)
        return res.data
        
            })

            if (isLoading) {
              return <div className='text-center'><span className="loading loading-infinity loading-lg"></span></div>
            
            }

    return (
        <div>
                

<div>
  
<div ref={sliderRef} className="keen-slider ">
{
  reviews.map(r=> (
    
    <div className="keen-slider__slide number-slide6
    ">
      <div className="card w-full md:w-4/5  shadow-xl">
  <div className="card-body">
    <h4 className=' text-sm md:text-base uppercase  font-extrabold'>Review about {r.collegeName}</h4>
  <div >
              <p> <div className="rating rating-md">
 
 
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
</div>  {r.rating}</p>
            </div>
    <p className='text-sm'>{r.reviews[0].review}</p>
  </div>
</div>
      
    </div>

  ))
}

    </div>

</div>


    </div>
        
    );
};

export default Review;