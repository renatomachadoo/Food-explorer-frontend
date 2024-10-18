import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    position: relative;

    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 
        "header"
        "main"
        "footer"
    ;

    overflow-y: auto;

    > main {
        grid-area: main;
        width: 100%;

        margin: 0 auto;
        padding: 1.5rem 7.625rem;

        max-width: ${( {theme}) => theme.LIMITS.MAX_PAGE_WIDTH};
        
        display: flex;
        align-content: start;
        flex-wrap: wrap;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
            padding: 1rem 3.5rem 2rem;
        }

        .content {
            width: 100%;
            display: flex;
            gap: 3rem;
            align-items: start;

            @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
                flex-direction: column;
                align-items: center;
                text-align: center;
            }

            .image img{
                width: 24.375rem;
            }

            .data{
                h1 {
                    font-family: "Poppins", sans-serif;
                    font-weight: 500;
                    font-size: 2.5rem;
                    line-height: 140%;

                    color: ${ ({ theme }) => theme.COLORS.LIGHT_300 };

                    margin-bottom: 1.5rem;
                }

                p{
                    font-family: "Poppins", sans-serif;
                    font-weight: 400;
                    font-size: 1.5rem;
                    line-height: 140%;

                    color: ${ ({ theme }) => theme.COLORS.LIGHT_300 };

                    margin-bottom: 1.5rem;
                }

                .ingredients{
                    width: 100%;

                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.75rem;

                    margin-bottom: 1.5rem;

                    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
                        justify-content: center;
                    }
                }

                .buttons {
                    display: flex;
                    gap: 2rem;

                    > button {
                        width: fit-content;
                        padding: 0.75rem 1.5rem;
                    }

                    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
                        justify-content: center;
                    }
                }
            }
        }

        

        /* display: flex;
        flex-direction: column;
        gap: 3rem; */

        /* @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
            padding: 2.75rem 1.75rem 1.5rem;
        } */
    }
`