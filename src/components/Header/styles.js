import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 100%;
    max-height: 7.125rem;
    background: ${ ({ theme}) => theme.COLORS.DARK_600};

    display: grid;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    grid-template-columns: auto 1fr auto;
    grid-template-areas: 
        "logo search button logout"
    ;

    padding: 1.75rem 7.75rem;
    
    grid-area: header;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        padding: 3.5rem 1.75rem 1.5rem;
        grid-template-areas: 
        "menu logo button"
        ;
    }

    .logo{
        grid-area: logo;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.625rem;

        svg {
            height: 1.875rem;
            width: 1.875rem;
        }

        h2 {
            font-family: "Roboto", sans-serif;
            font-size: 1.5rem;
            font-weight: bold;
        }
    }

    .input {
        grid-area: search;
        @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
            display: none;
        }
    }

    > button {
        padding: 0.75rem 2.90625rem;
        max-width: 13.5rem;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
            display: none;
        }

        svg {
            color: ${ ({ theme }) => theme.COLORS.LIGHT_100};
        }
    }

    #logout {
        color: ${ ({ theme }) => theme.COLORS.LIGHT_100};
        cursor: pointer;
        @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
            display: none;
        }
    }

    .menu-mobile{
        color: ${ ({ theme }) => theme.COLORS.LIGHT_100};
        cursor: pointer;
        grid-area: menu;

        @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
            display: none;
        }
    }

    #cart-mobile{
        color: ${ ({ theme }) => theme.COLORS.LIGHT_100};
        cursor: pointer;
        grid-area: button;

        position: relative;

        @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
            display: none;
        }

        span {
            background-color: ${ ({ theme }) => theme.COLORS.TOMATO_100};
            
            width: 1.25rem;
            height: 1.25rem;
            
            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 50%;

            position: absolute;
            right: -2px;
            top: -2px;
        }
    }

    #menu-mobile-text{
        font-size: 1.3125rem;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
    }
`