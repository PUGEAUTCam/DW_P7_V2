import styled from "styled-components";

export const ContainerBio = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    margin: 0px 74px;
    margin-bottom: 60px;
        @media screen and (max-width: 768px) {
            margin: 0px 30px;
            margin-bottom: 46px;
        }
        @media screen and (max-width: 992px) {
            margin-bottom: 46px;
        }
`
export const ModalInputContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const ContainerBtn = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 11px;
`

export const Background = styled.div`
width: 100%;
height: 100%;
background: #262626;

`