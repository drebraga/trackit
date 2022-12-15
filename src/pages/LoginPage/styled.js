import styled from "styled-components";

export const Login = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    a {
        margin-top: 50px;
    }
`;
export const Title = styled.h1`
    margin-bottom: 30px;
    font-family: 'Playball', cursive;
    font-weight: 400;
    font-size: 69px;
    line-height: 86px;
    text-align: center;
    color: #126BA5;
`;
export const InputsLogin = styled.form`
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
        box-sizing: border-box;
        margin: 5px 0;
        width: 80%;
        height: 45px;
        padding: 10px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        &::placeholder{
            font-family: 'Lexend Deca', sans-serif;
            font-size: 21px;
            line-height: 26px;
            font-weight: 400;
            color: #DBDBDB;
        }
    }
    button{
        width: 80%;
        height: 45px;
        background: #52B6FF;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 21px;
        line-height: 26px;
        font-weight: 400;
        border-radius: 5px;
        text-align: center;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
export const Cadastro = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
`;