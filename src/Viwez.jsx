import React from 'react'
import dataa from './Datas';
import { BiArrowBack } from "react-icons/bi"

import { NavLink, useParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Viwez() {

    const  {id}  = useParams();
    const card =dataa.find((obj)=>{
        return obj.id === id;
    });
console.log(card);
    return (
            <div className='mt-5 h-[100vh]' data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
                <div className=" container">
                        <div className="col-12 bg-slate-50 rounded-xl my-5 h-[100vh]" >
                            <img className='w-[90%] h-[600px] mx-auto my-2 rounded-b-lg' src={card.img} />
                            <h1 className='text-5xl font-bold text-slate-700 pl-5'>{card.title} </h1>
                            <p className='  text-slate-700 pl-5'>{card.text} </p>
                            <p className='  text-slate-300 pl-5'>{card.country}</p>
                            <NavLink to="/" className='btn btn-secondary m-2 ml-5'><BiArrowBack /></NavLink>
                        </div>

                </div>

            </div>

    )
}

export default Viwez
