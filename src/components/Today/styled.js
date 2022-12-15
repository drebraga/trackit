import styled from "styled-components";

export const Card = styled.div`
    box-sizing: border-box;
    width: 90%;
    height: 100px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 17px 20px;
    margin-top: 20px;
`;
export const HabitTitle = styled.h2`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 5px;
`;
export const HabitText = styled.h2`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #666666;
`;
export const CheckBox = styled.div`
    display: flex;
    align-items: center;
    font-size: 70px;
    color: ${props => props.check ? "#8FC549" : "#EBEBEB"};
`;
export const CheckText = styled.span`
    color: ${props => props.check ? "#8FC549" : "#666666"};
`;