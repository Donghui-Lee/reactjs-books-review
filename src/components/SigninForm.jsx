import React from 'react';
import { Col, Input } from 'antd';
import styled from 'styled-components';


const Container = styled.div`
    padding: 30px;
    width: 100%;
`;

const Title = styled.div`
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  padding-bottom: 30px;
  padding-top: 30px;
`;

const SiginInfoContainer = styled.div`
    padding-top: 30px;
    padding-bottom: 30px;
`;

const InputLabel = styled.div`
    font-family: Roboto;
    display: block;
    font-weight: bold;
    margin-bottom: 10px;
    color: rgba(0, 0, 0, 0.8);
`;

const InputContainer = styled.div`
    margin-bottom: 20px;
`;

const StyledInput = styled(Input)`
    font-family: Roboto;
`;

const StyledSpan = styled.span.attrs(() => ({
    children: '*'
}))`
    color: #971931;
`;

const ButtonContainer = styled.div`
    padding-top: 10px;
`;

const StyledButton = styled.button`
    font-family: Roboto;
    font-weight: bold;
    text-transform: uppercase;
    width: 100px;
    height: 35px;
    background-color: #28546a;
    color: white;

    &:hover {
        background-color: white;
        color: #28546a;
    }
`;

const Underline = styled.div`
    border-bottom: 1px solid #dddddd;
`;

const SiginEtcInfoContainer = styled.div`
    padding-top: 30px;
`;

const LinkContainer = styled.div`
    display: inline-flex;
    width: 100%;
    margin-bottom: 5px;
    margin-top: 5px;
`;

const LinkLabel = styled.div`
    font-family: Roboto;
    display: block;
    font-weight: bold;
    margin-top: 5px;
    width: 70%;
`;

const LinkButtonContainer = styled.div`
    width: 30%;
`;

const LinkButton = styled.button`
    text-transform: uppercase;
    width: 100px;
    background-color: #f3f7f8;
    border-width: 2px;
    border-color: #28546a;
    color: #28546a;

    &:hover {
        background-color: #28546a;
        color: #f3f7f8;   
    }
`;

const SinginForm = () => (
    <Col span={12} 
         style={{verticalAlign: 'top'}}>
        <Container>
            <Title>LOG IN. START SEARCHING.</Title>  

            <SiginInfoContainer>
                <InputLabel>
                    Email
                    <StyledSpan />
                </InputLabel>
                <InputContainer>
                    <StyledInput></StyledInput>
                </InputContainer>
                <InputLabel>
                    Password
                    <StyledSpan />
                </InputLabel>
                <InputContainer>
                    <StyledInput></StyledInput>
                </InputContainer>
                <ButtonContainer>
                    <StyledButton>SIGN IN</StyledButton>
                </ButtonContainer>
            </SiginInfoContainer>

            <Underline></Underline>

            <SiginEtcInfoContainer>
                <LinkContainer>
                    <LinkLabel>Need to create an account?</LinkLabel>
                    <LinkButtonContainer>
                        <LinkButton>SIGN UP</LinkButton>
                    </LinkButtonContainer>
                </LinkContainer>
                <LinkContainer>
                    <LinkLabel>Forget your password?</LinkLabel>
                    <LinkButtonContainer>
                        <LinkButton>RECOVERY</LinkButton>
                    </LinkButtonContainer>
                </LinkContainer>
            </SiginEtcInfoContainer>
        </Container>
    </Col>
);

export default SinginForm;