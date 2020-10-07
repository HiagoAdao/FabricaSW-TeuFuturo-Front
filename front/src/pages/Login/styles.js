import styled from "styled-components";
import { Button } from '@material-ui/core';
import { Colors } from "../../theme/Colors";

export const Main = styled.div`
    display: flex;
    flex: 1;
    background: #FFFFFF;
    height: 100vh;
`;

export const Roxo = styled.div`
    display: flex;
    flex: 6.5;
    background: #685AA4;

    justify-content: center;
    align-items: center;
`;

export const Branco = styled.div`
    display: flex;
    flex: 3.5;
    background: #FFFFFF;

    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`;

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CustomButton = styled(Button)`
    background-color: #09C774;
    width: 340px;
    height: 60px;
    border-radius: 54px;
    font-weight: bold;
`;