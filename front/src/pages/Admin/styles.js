import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
`;

export const Header = styled.div`
    height: 80px;
    background-color: #685AA4;
    padding-top: 14px;
    padding-left: 28px;

    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Title = styled.h1`
    display: flex;
    flex: 1;
    color: #FFFFFF;
    align-self: center;
    padding-left: 28px;
    font-weight: normal;
    font-size: 24px;
`;

export const Body = styled.div`
    display: flex;
    flex: 1;
    height: 90%;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const MainComponent = styled.div`
    height: 80px;
    background-color: #123321;
    padding-top: 14px;
    padding-left: 28px;
`;

export const styledLi = styled.div`
    border-color: #123421;
    border-width: 1px;
`;