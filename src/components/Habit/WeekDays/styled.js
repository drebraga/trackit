import styled from "styled-components";

export const InputDays = styled.button`
    box-sizing: border-box;
    margin-right: 10px;
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 21px;
    line-height: 26px;
    font-weight: 400;
    background-color: ${props => props.includes ? "#CFCFCF" : "#FFFFFF"};
    color: ${props => props.includes ? "#FFFFFF" : "#DBDBDB"}; 
`;