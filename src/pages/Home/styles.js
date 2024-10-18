import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 100vw;
    max-width: 100vw;
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
    overflow-x: hidden;

    main{
        grid-area: main;
        width: 100%;
        max-width: 100vw;

        .main {
            margin: 0 auto;
            /* width: 100%; */
            max-width: ${( {theme}) => theme.LIMITS.MAX_PAGE_WIDTH};

            padding: 10.25rem 7.75rem 3rem;

            display: flex;
            flex-direction: column;
            gap: 3rem;

            @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
                padding: 2.75rem 1.75rem 1.5rem;
            }
            
            .slogan {
                width: 100%;
                height: 16.25rem;

                background: ${ ({ theme }) => theme.GRADIENTS.GRADIENT_200};

                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));

                border-radius: 0.5rem;

                @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
                    height: 7.5rem;
                }

                div:nth-child(1){
                    position: relative;

                    img {
                        position: absolute;
                        width: 100%;
                        bottom: 0;
                        left: 0;
                    }
                }

                div:nth-child(2){
                    display: flex;
                    flex-direction: column;

                    align-items: start;
                    justify-content: center;

                    padding-right: 1rem;

                    p {
                        font-family: "Poppins", sans-serif;
                        font-weight: 500;
                        font-size: 2.5rem;
                        line-height: 140%;
                        color: ${ ({ theme }) => theme.COLORS.LIGHT_300};

                        @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
                            font-size: 1.125rem;
                            font-weight: 600;
                        }
                    }

                    small {
                        font-family: "Roboto", sans-serif;
                        font-weight: 400;
                        font-size: 1rem;
                        line-height: 100%;
                        color: ${ ({ theme }) => theme.COLORS.LIGHT_300};

                        @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
                            font-family: "Poppins", sans-serif;
                            font-size: 0.75rem;
                        }
                    }
                }
            }
        }
    }
    
`