import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import styled from 'styled-components'

const Pic = styled.div`
    clip-path: polygon(0% 0%, 100% 0%, 100% 72%, 80% 100%, 0% 100%);
    height: 55%;
    width: 65%;
    padding-left: 5%;
    margin-top: -10%;
    z-index:50;
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`
function Slider() {
    const data = [
        {
            id:1,
            name:'Manage Payments across multiple business outlets',
            title:'Recieve and track and Manage payments from hundreds of sources in asingle dashboard',
            pic:'/four.webp'
        },
        {
            id:1,
            name:'Provide Financial Services and earn while at it',
            title:'Be the sure padi for every Money-Related activity people need to make in your area',
            pic:'/three.webp'
        },
        {
            id:1,
            name:'Thanks to one agent, there is a hundered more',
            title:'There are super agents creating wealth and building a network of new agents',
            pic:'/two.webp'
        },
        {
            id:1,
            name:'Reconcile cash, card and transfer with ease',
            title:'Track payments on multiple Channels for every item sold in your store',
            pic:'/one.webp'
        }
    ]
  return (
    <Swiper className='swiper'
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={20}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
      {
          data.map((item)=>(
              <SwiperSlide className='slide' key={item.id}>
                  <Pic><img src={item.pic} alt="" /></Pic>
                  <h1>{item.name}</h1>
                  <p>{item.title}</p>
              </SwiperSlide>
          ))
      }
  </Swiper>
  )
}

export default Slider