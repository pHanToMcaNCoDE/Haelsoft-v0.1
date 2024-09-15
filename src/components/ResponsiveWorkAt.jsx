import React from 'react'
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

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

const ResponsiveWorkAt = () => {
  return (
    <section className='lg:hidden py-[100px] flex flex-col justify-center text-center gap-[6em]'>
        <h1 className='px-5 text-[#201A18] leading-6 font-semibold text-[1.5rem]'>Ed-Tech Graduates Work At</h1>

      <div className="flex flex-col gap-6 clients">
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
          className="flex items-center justify-center w-full h-[71px] gap-20"
          aria-label="My Favorite Images"
        >
          <SplideSlide className="w-[97px] h-[71px] flex items-center justify-center">
            <img width={130} height={130} src={afro} alt="Afro"></img>
          </SplideSlide>
          <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
            <img width={130} height={130} src={photiz} alt="Photiz"></img>
          </SplideSlide>
          <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
            <img width={130} height={130} src={kusnap} alt="Kusnap Icon"></img>
          </SplideSlide>
          <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
            <img width={130} height={130} src={swun} alt="Swun"></img>
          </SplideSlide>

          <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
          {/* <img width={130} height={130} src={srv} alt="srv"></img> */}
          </SplideSlide>
          <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
            <img width={130} height={130} src={lb} alt="lb"></img>
          </SplideSlide>
          <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
            <img width={130} height={130} src={gd} alt="gd"></img>
          </SplideSlide>
        </Splide>

        <Splide 
        extensions={{ AutoScroll }}
          options={{
            type: "loop",
            gap: "30px",
            direction: "rtl",
            pauseOnHover: false,
            pauseOnFocus: false,
            perPage: 3,
            arrows: false,
            pagination: false,
            autoScroll: { pauseOnHover: false, speed: 1 },
          }}
          className="flex items-center justify-center w-full gap-20"
          aria-label="My Favorite Images">
        <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
            <img width={130} height={130} src={pc} alt="pc"></img>
          </SplideSlide>

          <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
            <img width={130} height={130} src={peppa} alt="peppa"></img>
          </SplideSlide>
          <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
            <img width={130} height={130} src={rh} alt="rh"></img>
          </SplideSlide>
          <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
            <img width={130} height={130} src={iso} alt="iso"></img>
          </SplideSlide>
          <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
            <img width={130} height={130} src={znz} alt="znz"></img>
          </SplideSlide>
          <SplideSlide className="w-[97px] h-[61px] flex items-center justify-center">
            <img width={130} height={130} src={lcp} alt="lcp"></img>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  )
}

export default ResponsiveWorkAt