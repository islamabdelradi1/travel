// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { Link } from 'react-router-dom';
// import Viwez from './Viwez';


// function Cards({item}) {

//     return (
//             <div>
//             <Card className='mr-3 rounded-tl-xl rounded-tr-xl my-2' key={item.id}>
//                         <div className='h-[330px]'>
//                         <Card.Img variant="top" className='rounded-tl-xl rounded-tr-xl h-[100%]' src={item.img} />
//                         </div>

//                     <Card.Body>
//                         <Card.Title>{ item.title }</Card.Title>
//                         <Card.Subtitle className="mb-2 text-muted text-[13px]">{ item.country}</Card.Subtitle>
//                         <hr />
//                         <div className='flex justify-between px-3'>
//                             <p>CULTURAL <br /> RELAX</p>
//                             <h1 className=' font-bold text-2xl text-slate-700'>${item.price}</h1>
//                         </div>
//                         <hr />
//                         <Card.Text className=' text-[14px] text-slate-500'>
//                         {item.text }
//                         </Card.Text>
//                         <Link to={`/Viwez/${item.id}`}>
//                             <Button variant="primary " className='btns border-none rounded-full  text-[14px] px-10 text-white py-2 my-2  '>DETAILS</Button>
//                         </Link>
//                     </Card.Body>
//                     </Card>

//             </div>

//     )
// }

// export default Cards
