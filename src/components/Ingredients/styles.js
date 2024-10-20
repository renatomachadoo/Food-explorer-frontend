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

    .ingredients-wrapper {
        width: 100%;
        
        background: ${ ({ theme }) => theme.COLORS.DARK_900};

        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.875rem;

        border-radius: 0.5rem;

        font-size: 1rem;
        line-height: 100%;

        border-radius: 0.5rem;

        padding: 0.5rem;
    }
`

export const NewIngredient = styled.div`
    width: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px dashed ${ ({ theme}) => theme.COLORS.LIGHT_500};
    border-radius: 0.5rem;

    > input {
        width: 100%;
        padding: 0.5rem 1rem;
        background: transparent;
        border: none;
        
        font-size: 1rem;
        line-height: 100%;
        font-family: "Roboto", sans-serif;

        color: ${ ({ theme}) => theme.COLORS.LIGHT_100};

        &::placeholder {
            color: ${ ({ theme}) => theme.COLORS.LIGHT_500};
        }
    }

    > svg {
        margin-right: 0.5rem;
        cursor: pointer;
    }
`

export const Ingredient = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    border: 1px solid ${ ({ theme}) => theme.COLORS.LIGHT_500};
    background: ${ ({ theme}) => theme.COLORS.LIGHT_600};

    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    
    font-size: 1rem;
    line-height: 100%;
    font-family: "Roboto", sans-serif;

    color: ${ ({ theme}) => theme.COLORS.LIGHT_100};

    > svg {
        cursor: pointer;
    }
`