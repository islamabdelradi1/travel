import { AiOutlineFacebook,AiOutlineInstagram,AiOutlineYoutube,AiOutlineMenuUnfold,AiOutlineDeploymentUnit } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function Footer() {
    
    return (
        <div className='footer '>
            <div className='secofooter'>
                <video autoPlay muted loop>
                        <source src='imgs\Ocean-65560.mp4' type="video/mp4" />
                </video>
            </div>
            <div className=' relative  -top-[500px]  container '>
                <div className='block items-center justify-center md:flex'>
                <h1 className=' font-bold text-3xl text-white pb-10'>
                    <p className=' text-white text-[12px]'>KEEP IN TOUCH</p>
                    Travel with us
                </h1>
                <form className='pl-0 mb-3 md:mb-0 md:pl-5 flex '>
                <input type="text" placeholder='Enter Email Address' className='p-2 rounded-full bg-transparent border' />
                <button type='submit' className=' btns border-none rounded-full  text-[14px] px-10 text-white py-2 ml-3'>SEND</button>
                </form>
                
                </div>

            </div>
            <div className="container bg-white rounded-xl relative -top-[500px] p-5">
                    <div className=" grid grid-cols-2 md:grid-cols-4  ">
                        <div data-aos="fade-up"
     data-aos-duration="1500">
                            <h1 className='text-slate-800 text-4xl font-bold'>Travil.</h1>
                            <p className='text-slate-500 text-sm py-3'>Lorem ipsum dolor sit amet, consectetur odpisicing elt, Ulam
                                inventore eos fuga hic cum voluptotem minima, termpore non odio
                                provident nobis ipsom ot doloremque sed cupidtate ipaum in, ofque
                                souta?</p>
                                <div className='flex'>
                                <AiOutlineFacebook className=' text-slate-600 hover:text-gray-400 text-3xl' />
                                <AiOutlineInstagram className=' text-slate-600 hover:text-gray-400 text-3xl'/>
                                <AiOutlineYoutube className=' text-slate-600 hover:text-gray-400 text-3xl' />
                                </div>
                        </div>
                        <div data-aos="fade-up"
     data-aos-duration="3000">
                            <p className='font-bold'>OUR AGENCY</p>
                            <div className='grid'>
                            <a href="#">Sorvices</a>
                            <a href="#">Insurances</a>
                            <a href="#">Agency</a>
                            <a href="#">Tourism</a>
                            <a href="#">Payment</a>
                            </div>
                        </div>
                        <div data-aos="fade-up"
     data-aos-duration="3000">
                            <p className='font-bold'>PARTINERS</p>
                            <div className='grid'>
                            <a href="#">Booking</a>
                            <a href="#">RentalCar</a>
                            <a href="#">HistelWord</a>
                            <a href="#">Trivago</a>
                            <a href="#">TripAdvisor</a>
                            </div>
                        </div>
                        <div data-aos="fade-up"
     data-aos-duration="3000">
                            <p className='font-bold'>LAST MINUTE</p>
                            <div className='grid'>
                            <a href="#">London</a>
                            <a href="#">California</a>
                            <a href="#">Indonesia</a>
                            <a href="#">Europa</a>
                            <a href="#">Oceania</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Footer