import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  > h3 {
    font-size: 2rem;
    line-height: 140%;
    font-weight: 400;
    font-family: "Poppins", sans-serif;

    color: ${ ({ theme }) => theme.COLORS.LIGHT_300};
    margin-bottom: 1.5rem;
  }

  .slide{
    width: 19rem;
    height: auto;

    word-wrap: break-word;

    position: relative;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    text-align: center;

    padding: 1.5rem 1.5rem 2.875rem;

    background: ${ ({ theme }) => theme.COLORS.DARK_200 };
    border: 1px solid ${ ({ theme }) => theme.COLORS.DARK_300 };
    border-radius: 0.5rem;

    img{
      width: 11rem;
      height: 11rem;

      border-radius: 50%;
    }

    .title {
      width: 100%;
      margin-top: 0.9375rem;

      font-family: "Poppins", sans-serif;
      font-weight: bold;
      font-size: 1.5rem;
      line-height: 140%;

      cursor: pointer;

      color: ${ ({ theme }) => theme.COLORS.LIGHT_300};
    }

    small{
      width: 100%;
      margin-top: 0.9375rem;

      font-family: "Roboto", sans-serif;
      font-size: 0.875rem;
      line-height: 160%;

      color: ${ ({ theme }) => theme.COLORS.LIGHT_400};
    }

    .price{
      width: 100%;
      margin-top: 0.9375rem;
      margin-bottom: 0.9375rem;

      font-family: "Roboto", sans-serif;
      font-size: 2rem;
      line-height: 160%;

      color: ${ ({ theme }) => theme.COLORS.CAKE_200};
    }

    .add-cart{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }

    .button-add-cart{
      width: 5.75rem;

      @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        width: 100%;
        max-width: 10rem;
      }
    }

    .favorite{
      position: absolute;

      top: 1rem;
      right: 1rem;
    }
  }

  .swiper-button-prev-slide{
      position: absolute;
      left: 1.875rem;
      top: 0;
      bottom: 0;
      z-index: 15;
      @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
        display: none;
      }
  }

  .swiper-button-next-slide{
      position: absolute;
      right: 1.875rem;
      top: 0;
      bottom: 0;
      z-index: 15;
      @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
        display: none;
      }
  }

  .left-shadow{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;

    width: 17.375rem;
    height: 100%;

    background: ${ ({ theme }) => theme.GRADIENTS.GRADIENT_100_TO_L};

    z-index: 10;
    @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
      display: none;
    }
  }

  .right-shadow{
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;

    width: 17.375rem;
    height: 100%;

    background: ${ ({ theme }) => theme.GRADIENTS.GRADIENT_100_TO_R};

    z-index: 10;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
      display: none;
    }
  }
`