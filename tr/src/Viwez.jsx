import React, { useContext } from 'react'
import{ UserContext } from './Cards';
import { NavLink } from 'react-router-dom';

function Viwez() {

    const user = useContext(UserContext);
    
    console.log(user);

    return (
            <div className='mt-5'>
                <div className=" container">
                        <div className="col-12 bg-slate-50 rounded-xl my-5 " >
                            <img className='w-[1000px] h-[500px] mx-auto my-3' src="https://www.tahiti.com/images1/banners/island_bora_bora_masthead2.jpg" alt="island_bora_bora_masthead2.jpg" />
                            <h1 className='text-5xl font-bold text-slate-700 text-center'>Bora Bora</h1>
                            <p className='  text-slate-700 text-center'>The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous octivities</p>
                            <p className='  text-slate-300 text-center'>New Zeakand</p>
                            <NavLink to="/" className='btn btn-secondary m-2'>back</NavLink>
                        </div>

                </div>

            </div>

    )
}

export default Viwez
