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
import Cards from './Cards';
import axios from 'axios';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


function Sec1() {
    const [destination,setdestination]=useState();
    const [bld,setbld]=useState();
    const [date,setdate]=useState();
    const [loading, setLoading] = useState(false);
    const[items,setitems] =useState(dataa);

    const searchbtn = ()=>{
        const updateitem = dataa.filter((e)=>{
            return e.country === bld;
        });
        const updateprice = dataa.filter((e)=>{
            return e.price === destination;
        });
        setitems(updateitem);
        setitems(updateprice);
        // setLoading(true);

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
                        className=' range w-[100%] rounded-full p-2 ' min={500} max={1100} onChange={e => setdestination(e.target.value)} />
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
        <div className=' my-5'>
        <div className="container">
            <h1 className='text-2xl font-bold text-slate-700  pt-5 pb-3'>Most visited <span className=' border-b-4  border-cyan-500'>destionations</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-3 '  data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
        {loading ? <h1 className='text-6xl font-bold w-[100%]'>404</h1>:items.map((item,index) => (
            <div key={index}>
                        <Card className='mr-3 rounded-tl-xl rounded-tr-xl my-2 h-[500px]'>
                        <div className='h-[227px] overflow-hidden rounded-tl-xl rounded-tr-xl'>
                        <Card.Img variant="top" className='rounded-tl-xl rounded-tr-xl h-[100%] hover:scale-125 transition  ease-in-out duration-500' src={item.img} />
                        </div>

                    <Card.Body className=' hover:bg-slate-100'>
                        <Card.Title>{ item.title }</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted text-[13px]">{ item.country}</Card.Subtitle>
                        <hr />
                        <div className='flex justify-between px-3'>
                            <p>CULTURAL <br /> RELAX</p>
                            <h1 className=' font-bold text-2xl text-slate-700'>${item.price}</h1>
                        </div>
                        <hr />
                        <Card.Text className=' text-[14px] text-slate-500'>
                        {item.text }
                        </Card.Text>
                        <Link to={`/Viwez/${item.id}`}>
                            <Button variant="primary " className='btns border-none rounded-full  text-[14px] px-10 text-white py-2 my-2  '>DETAILS</Button>
                        </Link>
                    </Card.Body>
                    </Card>
            </div>
        )
            
        )}

            
            </div>  


        </div>
    </div>

    </>
    )
}

export default Sec1