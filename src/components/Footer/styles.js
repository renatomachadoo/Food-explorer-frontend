import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 4.8125rem;
    background: ${ ({ theme}) => theme.COLORS.DARK_600};

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    padding: 1.5rem 7.75rem;

    grid-area: footer;

    > div {
        display: flex;
        align-items: center;
        gap: 0.625rem;

        svg {
            width: 1.875rem;
            height: 1.875rem;
        }

        span {
           color: ${ ({ theme }) => theme.COLORS.LIGHT_700};
           font-size: 1.5rem;
           font-family: "Roboto", sans-serif;
           font-weight: 700;
        }
    }

    > small {
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 160%;
        font-family: "Roboto", sans-serif;
    }
`