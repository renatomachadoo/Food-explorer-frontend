import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    padding: 5.625rem 6.75rem;

    > main {
        width: 100%;
        height: 100%;

        margin: 0 auto;
        max-width: ${ ({ theme }) => theme.LIMITS.MAX_PAGE_WIDTH};

        display: flex;
        align-items: center;
        justify-content: space-between;

        > .title {
            display: flex;
            gap: 1.1875rem;

            h1 {
                font-family: "Roboto", sans-serif;
                font-size: 2.625rem;
                font-weight: bold;
            }
        }

        @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
            flex-direction: column;
            justify-content: start;
            padding: 9.875rem 0 0 0;
        }
    }

    
`

export const Form = styled.form`
    width: 29.75rem;
    background-color: ${({theme}) => theme.COLORS.DARK_700 };

    padding: 4rem;
    border-radius: 1rem;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;

    > h2 {
        font-size: 2rem;
        font-weight: 500;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
        background: transparent;
        width: 100vw;
    }
`