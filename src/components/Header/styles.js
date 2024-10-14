import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 6.5rem;
    background: ${ ({ theme}) => theme.COLORS.DARK_600};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1.75rem 7.75rem;

    grid-area: header;
`