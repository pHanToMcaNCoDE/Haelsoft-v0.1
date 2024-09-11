import React from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";

import afro from '../../public/assets/clients/Afro a.png';
import photiz from '../../public/assets/clients/Afro c.png';
import swun from '../../public/assets/clients/Colur Code.jpg';
// import srv from '../../public/assets/clients/IMG_8040.JPG';
import kusnap from '../../public/assets/clients/KUSNAP.png';
import lb from '../../public/assets/clients/leatherback.png';
import gd from '../../public/assets/clients/Logo 2.png';
import pc from '../../public/assets/clients/Logo 4.png';
import peppa from '../../public/assets/clients/png peppa 1.png';
import rh from '../../public/assets/clients/Rhebuch-Logo.png';
import iso from '../../public/assets/clients/Untitled-1.png';
import znz from '../../public/assets/clients/Zaph and Zoe B.png';
import lcp from '../../public/assets/clients/Zaph and Zoe.png'

const ResponsiveNetwork = () => {
  return (
    <section className='w-full flex md:hidden flex-col gap-[4em] py-[100px]'>
        <div className='flex flex-col justify-center items-center max-w-[1200px] mx-auto text-center gap-4'>
            <h1 className='text-[#F36400] text-[2.125rem] font-semibold leading-9'>Collaborating with Leading Industry Experts</h1>
            <p className='w-full lg:w-[879px] text-center text-base text-[#655D59]'>
                At Haelsoft, we partner with renowned digital brands and professionals to deliver cutting-edge online courses, events, and bootcamp experiences, empowering learners worldwide.
            </p>
        </div>
        <div className="flex flex-col justify-between items-center gap-6 overflow-hidden relative before:absolute before:top-0 before:bottom-0 before:w-[45%] before:bg-gradient-to-r before:from-white before:to-transparent before:z-10 before:left-0 after:right-0 after:absolute after:top-0 after:bottom-0 after:w-[45%] after:z-10 after:bg-gradient-to-r after:from-transparent after:to-white clients h-full">  
            <div className="flex justify-center items-center gap-6 clients relative h-[115px]">
                {/* <div className='absolute w-[100px] bg-white'></div> */}
                <Splide
                    extensions={{ AutoScroll }}
                    options={{
                        type: "loop",
                        gap: "30px",
                        pauseOnHover: false,
                        pauseOnFocus: false,
                        perPage: 3,
                        arrows: false,
                        pagination: false,
                        autoScroll: { pauseOnHover: false, speed: 1 },
                    }}
                    className="flex items-center justify-center w-full gap-20"
                    aria-label="My Favorite Images"
                >
                    <SplideSlide className="w-[67px] h-[100px] object-contain flex items-center justify-center">
                        <img width={300} height={300} src={afro} alt="Afro"></img>
                    </SplideSlide>
                    <SplideSlide className="w-[67px] h-[100px] object-contain flex items-center justify-center">
                        <img width={300} height={300} src={photiz} alt="Photiz"></img>
                    </SplideSlide>
                    <SplideSlide className="w-[67px] h-[100px] object-contain flex items-center justify-center">
                        <img width={300} height={300} src={kusnap} alt="Kusnap Icon"></img>
                    </SplideSlide>
                    <SplideSlide className="grayscale w-[67px] h-[81px] flex items-center justify-center">
                        <img width={300} height={300} src={swun} alt="Swun"></img>
                    </SplideSlide>

                    <SplideSlide className="w-[67px] h-[100px] object-contain flex items-center justify-center">
                    {/* <img width={130} height={130} src={srv} alt="srv"></img> */}
                    </SplideSlide>
                    <SplideSlide className="w-[67px] h-[100px] object-contain flex items-center justify-center">
                        <img width={300} height={300} src={lb} alt="lb"></img>
                    </SplideSlide>
                    <SplideSlide className="w-[67px] h-[100px] object-contain flex items-center justify-center">
                        <img width={300} height={300} src={gd} alt="gd"></img>
                    </SplideSlide>
                </Splide>
            </div>
            <div className="flex justify-center items-center gap-6 clients h-[115px]">
                <Splide
                    extensions={{ AutoScroll }}
                    options={{
                    type: "loop",
                    gap: "30px",
                    
                    pauseOnHover: false,
                    pauseOnFocus: false,
                    perPage: 3,
                    arrows: false,
                    pagination: false,
                    autoScroll: { pauseOnHover: false, speed: 1 },
                    }}
                    className="flex items-center justify-center w-full gap-20"
                    aria-label="My Favorite Images"
                >
                    <SplideSlide className="w-[67px] h-[100px] object-contain flex items-center justify-center">
                            <img width={300} height={300} src={pc} alt="pc"></img>
                        </SplideSlide>

                        <SplideSlide className="w-[67px] h-[100px] object-contain flex items-center justify-center">
                            <img width={300} height={300} src={peppa} alt="peppa"></img>
                        </SplideSlide>
                        <SplideSlide className="w-[67px] h-[100px] object-contain flex items-center justify-center">
                            <img width={300} height={300} src={rh} alt="rh"></img>
                        </SplideSlide>
                        <SplideSlide className="w-[67px] h-[100px] object-contain flex items-center justify-center">
                            <img width={300} height={300} src={iso} alt="iso"></img>
                        </SplideSlide>
                        <SplideSlide className="w-[67px] h-[100px] object-contain flex items-center justify-center">
                            <img width={300} height={300} src={znz} alt="znz"></img>
                        </SplideSlide>
                        <SplideSlide className="w-[67px] h-[100px] object-contain flex items-center justify-center">
                            <img width={300} height={300} src={lcp} alt="lcp"></img>
                        </SplideSlide>
                </Splide>
            </div>
        </div>
      
    </section>
  )
}

export default ResponsiveNetwork