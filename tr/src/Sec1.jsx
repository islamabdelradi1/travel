import React, { useEffect, useState } from 'react'
import { AiOutlineFacebook,AiOutlineInstagram,AiOutlineYoutube,AiOutlineMenuUnfold,AiOutlineDeploymentUnit } from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { Link } from 'react-router-dom';
import Sec2 from "./Sec2";

import dataa from './Datas';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import axios from 'axios';
// ..
AOS.init();


function Sec1() {
    const [destination,setdestination]=useState();
    const [bld,setbld]=useState();
    const [date,setdate]=useState();

    
    const[items,setitems] =useState(dataa);

    const searchbtn = ()=>{
        const updateitem = dataa.filter((e)=>{
            return e.country === bld;
        });
        const updateprice = dataa.filter((e)=>{
            return e.price === destination;
        });
        // setLoading(true);
        setitems(updateitem);
        setitems(updateprice);

    }
// const fetch =()=>{
//     axios.get('https://picsum.photos/500/300')
//     .then( (response) => {
//         // handle success
//         // Math.floor(response * 100);
//         setimgs(response);
//     })
//     .catch( (error) => {
//         // handle error
//         console.log(error);
//     })
// }
// useEffect(()=>{
//     fetch();
// })

    return (

    <>
        <div className='h-[900px]'>
            <div className='seco'>
                <video autoPlay muted loop  >
                    <source src='imgs/Island-2946.mp4' type="video/mp4" />
                </video>

            </div>
            
            <div className=' relative  -top-[700px] container z-1'>
                <p className=' text-white'>OUR PACKAGES</p>
                <h1 className=' font-bold text-3xl text-white pb-10'>Search your Holiday</h1>
                <div>
                    <form className='flex bg-white py-11 px-20  rounded-xl justify-between row'>
                        <div className='mr-5 col-md-4 col-sm-12'>
                        <label  className='block text-slate-500'>Search your destination:</label>
                        <input type="text" name='bld' className=' bg-slate-200 w-[100%] rounded-full p-2'  onChange={e => setbld(e.target.value)} />
                        </div>
                        <div className='mr-5 col-md-4 col-sm-12'>
                        <label  className='block text-slate-500'>Search your date:</label>
                        <input type="date" name="date" id="date" className=' bg-slate-200 w-[100%] rounded-full p-2'  onChange={e => setdate(e.target.value)}  />
                        </div>
                        <div className='col-md-3  col-sm-12'>
                        <label  className='block text-slate-500 text-[14px] md:text-[15px]'>Search your destination: <span className=' float-right'>${destination}</span>  </label>
                        <input type="range" name="range" id="range"
                        className=' range w-[100%] rounded-full p-2 ' min={500} max={10000} onChange={e => setdestination(e.target.value)} />
                        </div>
                    </form>
                    <button className=' btns border-none rounded-full  text-[14px] px-10 text-white py-2 relative flex mx-auto -top-5' type='submit' onClick={searchbtn}>MORE FILTER</button>

                </div>
                <div className='flex justify-between'>
                    <div className='flex '>
                        <AiOutlineFacebook className=' text-slate-100 hover:text-gray-400' />
                        <AiOutlineInstagram className=' text-slate-100 hover:text-gray-400'/>
                        <AiOutlineYoutube className=' text-slate-100 hover:text-gray-400' />
                    </div>
                    <div className='flex'>
                        <AiOutlineMenuUnfold className=' text-slate-100 hover:text-gray-400' />
                        <AiOutlineDeploymentUnit className=' text-slate-100 hover:text-gray-400' />
                    </div>
                </div>
            </div>
        

        </div>
        <Sec2 items={items} />

    </>
    )
}

export default Sec1