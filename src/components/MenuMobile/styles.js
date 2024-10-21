import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 100%;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    position: absolute;
    
    background: ${ ({ theme}) => theme.COLORS.DARK_400};
    z-index: 50;

    display: flex;

    transform: ${ ({ menumobileopened }) => menumobileopened === "true" ? "translateX(0)" : "translateX(-100%)"};
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;

    flex-direction: column;
    gap: 2.25rem;

    grid-area: main;

    padding: 2.25rem 1.75rem;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        display: none;
    }

    > div:nth-child(2), div:nth-child(3) {
        text-align: start;
        padding: 0.625rem;

        button {
            font-family: "Poppins", sans-serif;
            font-size: 1.5rem;
            font-weight: 300;
            line-height: 140%;
        }

        border-bottom: 1px solid ${ ({ theme }) => theme.COLORS.DARK_1000};
    }
`