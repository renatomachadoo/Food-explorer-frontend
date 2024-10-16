import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    text-align: center;

    > button {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 0.5rem;
        
        color: ${ ({ theme }) => theme.COLORS.LIGHT_100};

        font-family: "Poppins", sans-serif;
        font-size: 0.875rem;
        line-height: 1.5rem;

        background: transparent;
        border: none;
    }
`