import styled from "styled-components"
import colors from "../StyleDefinition/colors"

export const Button = styled.button`
    height: 39px;
    width: 164px;
    border-radius: 6px;
    background:  ${colors.btnBg};
    border: none;
    font-size: 19px;
    color: ${colors.primary};
    margin-left: 20px;
    transition: all 300ms ease;
        :hover{
            color:${colors.blue1};
            transform: scale(1.01);
        }
        @media screen and (max-width: 768px) {
            height: 32px;
            width: 100px;
            font-size: 16px;
        }
`
export const ButtonDeco = styled.button`
    height: 32px;
    width: 117px;
    border-radius: 3px;
    background:  ${colors.btnBg};
    border: none;
    font-size: 18px;
    color: ${colors.primary};
    transition: all 300ms ease;
        :hover{
            color:${colors.blue1};
            transform: scale(1.01);
        }
        @media screen and (max-width: 768px) {
            height: 31px;
            width: 106px;
            font-size: 16px;
        }
`
export const ButtonDelete = styled.button`
    height: 38px;
    width: 36px;
    border-radius: 0px 17px 17px 0px;
    background: ${colors.btnBg};
    border: none;
    font-size: 20px;
    color: ${colors.primary};
    transition: all 300ms ease;

        :hover{
            color:${colors.blue1};
            transform: scale(1.03);
        }
`
export const ButtonComment = styled.button`
    height: 26px;
    width: 26px;
    border-radius: 13px;
    background: ${colors.btnBg};
    border: none;
    font-size: 20px;
    color: #e35503;
    margin-left: 12px;
    transition: all 300ms ease;
        :hover{
            color:${colors.blue1};
            transform: scale(1.03);
        }
`
export const ButtonAvatar = styled.button`
height: 26px;
width: 106px;
border-radius: 6px;
background: #323235ba;
border: none;
font-size: 17px;
margin-left: 32px;
color: rgb(213 23 23);
transition: all 300ms ease;
        :hover{
            color:${colors.blue1};
            transform: scale(1.03);
        }
`

//INPUT
export const Input = styled.textarea`
    background: ${colors.bg1};
    border: none;
    resize: none;
    font-size: 18px;
    color: white;
    overflow: auto;
    outline: none;
    box-shadow: none;
    font-family: unset;
    max-width: 457px;
    width: 76%;
    @media all and (max-width: 768px) {
        font-size: 14px;
    }
`
export const InputForm = styled.input`
    background: ${colors.bg1};
    border: none;
    resize: none;
    font-size: 18px;
    color: white;
    overflow: auto;
    outline: none;
    box-shadow: none;
    font-family: unset;   
    width: 327px;
    border-bottom: 1px solid ${colors.primary};
    margin-top: 40px;
    padding-bottom: 9px;
        @media all and (max-width: 768px) {
            font-size: 16px;
        }
`

export const TextArea = styled.textarea`
    background: ${colors.bg1};
    width: 93%;
    height: 65px;
    border: none;
    resize: none;
    font-size: 17px;
    margin-left: 13px;
    color: white;
    overflow: auto;
    outline: none;
    box-shadow: none;
    font-family: unset;
        @media screen and (max-width: 768px) {
            text-align: center;
            font-size: 15px;
        }
`