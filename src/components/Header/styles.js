import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.header`
    width: 100%;
    max-height: 7.125rem;
    background: ${ ({ theme}) => theme.COLORS.DARK_600};

    grid-area: header;

    z-index: 5;

    > div {
        width: 100%;
        max-width: ${({ theme}) => theme.LIMITS.MAX_PAGE_WIDTH};
        
        margin: 0 auto;

        display: grid;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        grid-template-columns: auto 1fr auto;
        grid-template-areas: 
            "logo search button logout"
        ;

        padding: 1.75rem 7.75rem;
        
        @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
            padding: 3.5rem 1.75rem 1.5rem;
            grid-template-areas: 
            "menu logo button"
            ;
        }

        .logo{
            grid-area: logo;

            display: flex;
            align-items: end;
            justify-content: center;
            flex-direction: column;

            cursor: pointer;

            @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
                flex-direction: row;
                justify-items: end;
                align-items: center;
                gap: 0.5rem;
            }

            .logo-upper{
                display: flex;
                gap: 0.625rem;
                align-items: center;
                justify-content: center;
            }

            svg {
                height: 1.875rem;
                width: 1.875rem;
            }

            h2 {
                font-family: "Roboto", sans-serif;
                font-size: 1.5rem;
                font-weight: bold;
            }

            p{
                font-family: "Roboto", sans-serif;
                font-size: 0.75rem;
                line-height: 160%;
                color: ${ ({ theme }) => theme.COLORS.CAKE_200};
            }
        }

        .input {
            grid-area: search;
            @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
                display: none;
            }
        }

        > button {
            padding: 0.75rem 2.90625rem;
            max-width: 13.5rem;

            @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
                display: none;
            }

            svg {
                color: ${ ({ theme }) => theme.COLORS.LIGHT_100};
            }
        }

        #logout {
            color: ${ ({ theme }) => theme.COLORS.LIGHT_100};
            cursor: pointer;
            @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
                display: none;
            }
        }

        .menu-mobile{
            color: ${ ({ theme }) => theme.COLORS.LIGHT_100};
            cursor: pointer;
            grid-area: menu;

            @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
                display: none;
            }
        }

        #cart-mobile{
            color: ${ ({ theme }) => theme.COLORS.LIGHT_100};
            cursor: pointer;
            grid-area: button;

            position: relative;

            @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
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
    }
`