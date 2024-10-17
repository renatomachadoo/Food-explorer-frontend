import { useState } from 'react';

import { Container } from './styles';

import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Count } from '../Count';
import { Button } from '../Button';
import { ButtonText } from '../ButtonText';

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

import salad from "../../assets/salad.svg"

export function Slider(){
  const [itemCount, setItemCount] = useState(0)

  function incrementItemCount(){
    setItemCount(prevState => prevState + 1)
  }

  function decrementItemCount(){
    if(itemCount > 0){
      setItemCount(prevState => prevState + 1)
    }
  }

  return (
    <Container>
      <h3>
        Sobremesas
      </h3>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={27}
        slidesPerView={"auto"}
        centeredSlides={true}
        pagination={{ clickable: true }}
        loop={true}
        navigation={{
          prevEl: ".swiper-button-prev-slide",
          nextEl: ".swiper-button-next-slide",
        }}
      >

        <div className='left-shadow'></div>
        <div className='right-shadow'></div>

        <ButtonText className="swiper-button-prev-slide" icon={IoIosArrowBack} />
        <ButtonText className="swiper-button-next-slide" icon={IoIosArrowForward} />

        <SwiperSlide className='slide'>
          <img src={salad} alt="salad" />
          <p className='title'>Salada</p>
          <small className='description'>Gosto muito de salada</small>
          <p className='price'>24.99$</p>
          <div className='add-cart'>
            <Count />
            <Button className="button-add-cart" text="incluir" />
          </div>
          <div className="favorite">
            <ButtonText icon={IoHeartOutline} />
          </div>
        </SwiperSlide>
        
        <SwiperSlide className='slide'>
          <img src={salad} alt="salad" />
          <p className='title'>Salada</p>
          <small className='description'>Gosto muito de salada</small>
          <p className='price'>24.99$</p>
          <div className='add-cart'>
            <Count />
            <Button className="button-add-cart" text="incluir" />
          </div>
          <div className="favorite">
            <ButtonText icon={IoHeartOutline} />
          </div>
        </SwiperSlide>

        <SwiperSlide className='slide'>
          <img src={salad} alt="salad" />
          <p className='title'>Salada</p>
          <small className='description'>Gosto muito de salada</small>
          <p className='price'>24.99$</p>
          <div className='add-cart'>
            <Count />
            <Button className="button-add-cart" text="incluir" />
          </div>
          <div className="favorite">
            <ButtonText icon={IoHeartOutline} />
          </div>
        </SwiperSlide>

        <SwiperSlide className='slide'>
          <img src={salad} alt="salad" />
          <p className='title'>Salada</p>
          <small className='description'>Gosto muito de salada</small>
          <p className='price'>24.99$</p>
          <div className='add-cart'>
            <Count />
            <Button className="button-add-cart" text="incluir" />
          </div>
          <div className="favorite">
            <ButtonText icon={IoHeartOutline} />
          </div>
        </SwiperSlide>

        <SwiperSlide className='slide'>
          <img src={salad} alt="salad" />
          <p className='title'>Salada</p>
          <small className='description'>Gosto muito de salada</small>
          <p className='price'>24.99$</p>
          <div className='add-cart'>
            <Count />
            <Button className="button-add-cart" text="incluir" />
          </div>
          <div className="favorite">
            <ButtonText icon={IoHeartOutline} />
          </div>
        </SwiperSlide>
        
      </Swiper>
    </Container>
  );
};