import styled from "styled-components";

export const Foot = styled.footer`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    padding: 0 30px;
    position: fixed;
    left: 0;
    bottom: 0;
    background: #FFFFFF;
    a {
        text-decoration: none;
    }
`;
export const Text = styled.p`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #52B6FF;
`;
export const Today = styled.input`
    margin-bottom: 35px;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: #52B6FF;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
`;