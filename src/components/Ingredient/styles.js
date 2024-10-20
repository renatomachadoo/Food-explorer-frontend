import styled from "styled-components";

export const Container = styled.div`
    background: ${ ({ theme }) => theme.COLORS.DARK_1000};

    padding: 0.25rem 0.5rem;
    border-radius: 5px;

    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.5rem;
`