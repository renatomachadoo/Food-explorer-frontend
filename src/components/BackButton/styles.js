import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: fit-content;

    .back{
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 140%;
        font-family: "Poppins", sans-serif;

        margin-bottom: 2.625rem;
        color: ${ ({ theme }) => theme.COLORS.LIGHT_300 };

        svg {
            color: ${ ({ theme }) => theme.COLORS.LIGHT_100 };
        }
    }
`