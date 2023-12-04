"use client"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Image from 'next/image'


const BreakpointSlides = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 530 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 530, min: 0 },
      items: 1,
    },
  }
  
  export default function Page() {
    return (
      <Carousel
      autoPlay
        responsive={BreakpointSlides}
        ssr
        infinite
        itemClass="carousel-item"
      >
        <Image
          alt="Gundam"
          src="/brucetang.jpg"
          priority
          width={700}
          height={300}
          style={{objectFit: "cover", height: '300px'}}
        />
        <Image
          alt="Musgo"
          src="/cameronsmith.jpg"
          priority
          width={700}
          height={300}
          style={{objectFit: "cover", height: '300px'}}
        />
        <Image
          alt="Valley"
          src="/ganapathykumar.jpg"
          priority
          width={700}
          height={475}
          style={{objectFit: "cover", height: '300px'}}
        />
        <Image
          alt="Beach"
          src="/roanlavery.jpg"
          width={700}
          height={475}
          style={{objectFit: "cover", height: '300px'}}
        />
        <Image
          alt="Torii"
          src="/tianshuliu.jpg"
          width={700}
          height={475}
          style={{objectFit: "cover", height: '300px'}}
        />
      </Carousel>
    )
  }
  