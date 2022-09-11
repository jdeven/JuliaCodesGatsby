import styled from 'styled-components';
import { SpreadWhiteAnim, SpreadBlackAnim, fadeIn } from './animate';

const QUERIES = {
    large: `min-width: 1200px`,
    medium: `min-width: 870px`,
    small: `min-width: 660px`,
    maxWidth: `1500px`,
};

export const Heading = styled.h1`
    font-size: 50px;
    line-height: 49px;
    font-weight: 500;
    margin: 0 auto;
    width: 100%;
    color: ${({ theme }) => theme.textMain};
    transition: all 0.3s ease-in-out;
    user-select: none;
    opacity: 0;
    letter-spacing: -5%;
    max-width: 700px;
    text-align: center;
    animation: ${fadeIn} 1s forwards;

    @media (${QUERIES.large}) {
        font-size: 82px;
        line-height: 82px;
    }
`;

export const Paragraph = styled.p`
    font-family: 'Spartan', sans-serif;
    font-weight: 400;
    letter-spacing: -3%;
    line-height: 37.2px;
    color: ${({ theme }) => theme.textMain};

    @media (${QUERIES.large}) {
        font-size: 19px;
    }
`;

export const Main = styled.main`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.main};
    overflow: hidden;

    > .growBlack {
        animation: ${SpreadBlackAnim} 2s forwards;
    }

    > .growWhite {
        animation: ${SpreadWhiteAnim} 2s forwards;
    }
`;

export const Full = styled.main`
    width: 100%;
    height: 100%;
    padding: 0px;
    max-width: 1500px;
    margin: 0 auto;

    @media (${QUERIES.large}) {
        padding: 30px;
    }
`;

export const Midi = styled.div`
    width: 100%;
    height: auto;
    margin: 70px auto 70px auto;
    padding: 30px;
    max-width: 1110px;

    @media (${QUERIES.large}) {
        margin: 220px auto 220px auto;
        padding: 0px;
    }
`;

export const Inner = styled.div`
    max-width: 1437px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding: 30px;

    display: flex;
    flex-direction: column;

    > * {
        width: 100%;
    }
`;

export const Image = styled.div`
    width: 100%;
    height: 500px;
    border-radius: 0px;
    background-position: center center;
    background-size: cover;
    opacity: 0;
    animation: ${fadeIn} 1s forwards;

    @media (${QUERIES.large}) {
        border-radius: 6px;
    }
`;

export default QUERIES;