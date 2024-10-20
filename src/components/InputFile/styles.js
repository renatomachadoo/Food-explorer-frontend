import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    > p {
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        line-height: 100%;
        font-weight: 400;
        color: ${ ({ theme }) => theme.COLORS.LIGHT_400};
    }

    > div {
        width: 100%;
        height: 3rem;

        background: ${ ({ theme }) => theme.COLORS.DARK_900};

        display: flex;
        align-items: center;
        gap: 0.875rem;

        border-radius: 0.5rem;

        font-size: 1rem;
        line-height: 100%;

        border-radius: 0.5rem;

        label {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: "Roboto", sans-serif;
            font-size: 1rem;
            line-height: 100%;
            font-weight: 400;
            color: ${ ({ theme }) => theme.COLORS.LIGHT_100};
            cursor: pointer;
            padding: 0.75rem 0.875rem;
            gap: 0.875rem;
        }

        > input {
            opacity: 0;
            position: absolute;
            z-index: -1;
        }
    }

    div:has(input:focus) {
        outline: 1px solid ${ ({ theme}) => theme.COLORS.LIGHT_100};
        border-radius: 0.3125rem;
        background: ${ ({ theme}) => theme.COLORS.DARK_700};
    }
`