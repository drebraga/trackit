import styled from "styled-components";

export const Form = styled.form`
    box-sizing: border-box;
    width: 90%;
    max-width: 700px;
    height: 180px;
    font-family: 'Lexend Deca', sans-serif;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
`;
export const InputText = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 45px;
    padding: 10px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    background: ${props => props.disabled ? "#F2F2F2" : "#FFFFFF"};
    &::placeholder{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 21px;
        line-height: 26px;
        font-weight: 400;
        color: #DBDBDB;
    }
`;
export const DivButton = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;
export const InputFinal = styled.button`
    box-sizing: border-box;
    margin: 0 5px;
    width: 25%;
    height: 30px;
    border: none;
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 15px;
    line-height: 20px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.value === "Cancelar" ? "#52B6FF" : "#FFFFFF"};
    background-color: ${props => props.value === "Cancelar" ? "#FFFFFF" : "#52B6FF"};
`;