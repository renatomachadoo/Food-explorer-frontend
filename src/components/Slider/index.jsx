import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';
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
import { TbPencil } from "react-icons/tb";

import dishImage from "../../assets/dish.jpg"

import { api } from '../../services/api';

export function Slider({ category, dishes, getDishes}){
  const navigate = useNavigate()
  const { user } = useAuth()
  const [dishItemCount, setDishItemCount] = useState({})

  async function addItemToFavorites(dishId){
    try {
        await api.post("/favorite_dishes", {
            dishId
        })
        await getDishes()
    } catch (error) {}
  }

  async function removeItemFromFavorites(dishId){
      try {
          await api.delete(`/favorite_dishes/${dishId}`)
          await getDishes()
      } catch (error) {}
  }

  function incrementItemCount(dishId) {
    setDishItemCount(prevState => ({
        ...prevState,
        [dishId]: prevState[dishId] ? prevState[dishId] + 1 : 2
    }));
  }

  function decrementItemCount(dishId) {
    if(dishItemCount[dishId] > 1){
      setDishItemCount(prevState => ({
        ...prevState,
        [dishId]: prevState[dishId] - 1
      }));
    }
  }

  function addItemToCart(dishId){
    alert("Item adicionado ao carrinho.")
      setDishItemCount(prevState => ({
        ...prevState,
        [dishId]: 1
    }));
  }

  return (
    <Container>
      <h3>
        {category}
      </h3>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={27}
        slidesPerView={"auto"}
        centeredSlides={true}
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

        {
          dishes.map((dish, index) => {
            return <SwiperSlide key={index} className='slide'>
              <img src={dish.image ? `${api.defaults.baseURL}/files/${dish.image}` : dishImage} alt={dish.name} />
              <p className='title' onClick={() => navigate(`/details/${dish.id}`)}>{dish.name}</p>
              <small className='description'>{dish.description}</small>
              <p className='price'>R$ {dish.price}</p>
              {user?.role !== "admin" && <div className='add-cart'>
                  <Count onPlusClick={() => incrementItemCount(dish.id)} count={dishItemCount[dish.id]} onMinusClick={() => decrementItemCount(dish.id)} />
                  <Button className="button-add-cart" text="incluir" onClick={() => addItemToCart(dish.id)} />
                </div>
              }
              
              <div className="favorite">
                {
                  user?.role === "admin" ? 
                    <ButtonText icon={TbPencil} onClick={() => navigate(`/edit/${dish.id}`)} /> : dish.isFavorite ? <ButtonText icon={IoHeartSharp} onClick={() => removeItemFromFavorites(dish.id)} /> 
                    : 
                    <ButtonText icon={IoHeartOutline} onClick={() => addItemToFavorites(dish.id)} />
                }
              </div>
            </SwiperSlide>
          })
        }
      </Swiper>
    </Container>
  );
};