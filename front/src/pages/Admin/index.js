import React from 'react';
import { Header, Container, Body } from './styles';
import {StyledButton} from '../../components';
import icon from '../../assets/img/iconTF.svg';
    
const Admin = () => {
    return (
        <Container>
          <Header>
            <img src={icon} alt={'icon'} />
          </Header>
          <Body>
            <StyledButton />
          </Body>
        </Container>
    )
}

export default Admin;
