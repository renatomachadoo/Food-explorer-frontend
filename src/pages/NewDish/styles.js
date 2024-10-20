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

        @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
            padding: 1.5rem;
        }

        .add-dish {
            width: 100%;

            display: flex;
            justify-content: end;
            flex-direction: column;
            gap: 2rem;

            h1 {
                font-size: 2rem;
                font-weight: 500;
                line-height: 140%;
                font-family: "Poppins", sans-serif;
            }

            .input-section{
                width: 100%;
                display: flex;
                gap: 2rem;

                @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
                    display: flex;
                    flex-direction: column;
                }

                .small-input{
                    max-width: 14.3125rem;
                    @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
                        max-width: 100%;
                    }
                }

                .medium-input{
                    max-width: 22.75rem;
                    @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
                        max-width: 100%;
                    }
                }
            }

            .buttons-section{
                width: 100%;
                display: flex;
                justify-content: end;
                > button {
                    width: fit-content;
                }
            }
        }
    }
`