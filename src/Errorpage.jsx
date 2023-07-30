import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Errorpage = () => {
    const { error, status } = useRouteError();
    return (
        
               <section className='flex'>
      <div className='container mx-auto '>
        <div className='text-center'>
         <img src='https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?w=740&t=st=1690216143~exp=1690216743~hmac=b55266ae28d95f6f2ae337351fc80f1625b946b28bdf3f5f710532eda3cae129' className=' w-5/12  mx-auto'   />   
        </div>
    

        <div className='text-center'>
          <h2 className='mb-8 fw-bold  '>
          </h2>
          <p className=' fw-semibold  mb-5'>
            {error?.message}
          </p>
          <Link to='/' className='px-5 py-3 fw-semibold rounded  '
          >
          <button className='btn' >Home</button>
          </Link>
        </div>
      </div>
    </section> 
       
    );
};

export default Errorpage;