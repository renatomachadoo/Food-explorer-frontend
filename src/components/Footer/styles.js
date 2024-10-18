import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
    width: 100%;
    background: ${ ({ theme}) => theme.COLORS.DARK_600};

    > div {
        min-height: 4.8125rem;
        width: 100%;
        max-width: ${({ theme}) => theme.LIMITS.MAX_PAGE_WIDTH};

        margin: 0 auto;

        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.5rem;

        padding: 1.5rem 7.75rem;

        grid-area: footer;

        @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
            padding: 1.75rem 1.5rem;
        }

        div {
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

        small {
            font-size: 0.875rem;
            font-weight: 400;
            line-height: 160%;
            font-family: "Roboto", sans-serif;
        }
    }
`