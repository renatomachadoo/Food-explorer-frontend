import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    /* height: 100%; */

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    position: absolute;
    
    background: ${ ({ theme}) => theme.COLORS.DARK_400};
    z-index: 1;

    display: ${ ({ menumobileopened }) => menumobileopened === "true" ? "flex" : "none"};
    flex-direction: column;
    gap: 2.25rem;

    grid-area: main;

    padding: 2.25rem 1.75rem;

    > div:nth-child(2) {
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