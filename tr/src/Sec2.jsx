import React, { useState } from 'react'

import AOS from 'aos';
import dataa from './Datas';
import Skeleton from '@mui/material/Skeleton';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Cards from './Cards';
// ..
AOS.init();


function Sec2({items}) {
    const [loading, setLoading] = useState(false);



    return (
        <div className=' my-5'>
        <div className="container">
            <h1 className='text-2xl font-bold text-slate-700  pt-5 pb-3'>Most visited <span className=' border-b-4  border-cyan-500'>destionations</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-3 '  data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
        {loading ? <h1 className='text-6xl font-bold w-[100%]'>404</h1>:items.map((item) => (

                    <Cards item={item}/>
        )
            
        )}

            
            </div>  


        </div>
    </div>
    )
}

export default Sec2