import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${ ({ theme }) => theme.COLORS.TOMATO_100};
    border-radius: 0.3125rem;
    padding: 0.75rem;

    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.5rem;
    color: ${ ({ theme}) => theme.COLORS.LIGHT_100};

    border: none;
`