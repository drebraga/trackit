import styled from "styled-components";

export const Head = styled.header`
    box-sizing: border-box;
    height: 70px;
    width: 100%;
    position: fixed;
    left: 0px;
    top: 0px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
    a {
        text-decoration: none;
    }
`;
export const Title = styled.h1`
    font-family: 'Playball', cursive;
    font-weight: 400;
    font-size: 39px;
    line-height: 49px;
    text-align: center;
    color: #FFFFFF;
`;
export const Image = styled.img`
    box-sizing: border-box;
    border: 1px solid black;
    object-fit: cover;
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;