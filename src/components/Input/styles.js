import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    > label {
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        line-height: 100%;
        font-weight: 400;
        color: ${ ({ theme }) => theme.COLORS.LIGHT_400};
        cursor: pointer;
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

        padding-left: ${ ({ Icon }) => Icon ? "0.875rem" : "" };

        > input {
            background: transparent;
            border: none;
            width: 100%;

            font-family: "Roboto", sans-serif;
            font-size: 1rem;
            color: ${({theme}) => theme.COLORS.LIGHT_100 };

            padding: 0.75rem 0.875rem;
            padding-left: ${ ({ Icon }) => Icon ? "0" : "0.875rem" };

            &::placeholder{
                color: ${({theme}) => theme.COLORS.LIGHT_500 };
            }
        }
    }

    div:has(input:focus) {
        outline: 1px solid ${ ({ theme}) => theme.COLORS.LIGHT_100};
        border-radius: 0.3125rem;
        background: ${ ({ theme}) => theme.COLORS.DARK_700};
    }
`