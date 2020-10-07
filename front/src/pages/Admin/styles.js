import styled from "styled-components";
import { Button } from '@material-ui/core';

export const Container = styled.div`
    height: 100vh;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.div`
    height: 80px;
    background-color: #685AA4;
    padding-top: 14px;
    padding-left: 28px;
`;

export const Body = styled.div`
    display: flex;
    flex: 1;
    background-color: #323232;
`;

export const CustomButton = styled(Button)`
    background: "#09C774";
    width: 340;
    height: 60;
    border-radius: 54;
    font-weight: 'bold';
`