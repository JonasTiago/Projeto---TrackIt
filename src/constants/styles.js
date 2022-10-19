import styled from "styled-components"

export const BodyStyle = styled.div`
    background-color:#fff;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    width:100vw;
    height:100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index:2;

    img{
        margin: 26px auto 20px auto;
        position:fixed;
        top:45px;
        bottom: 150px;
    }

    a{
        color: #52b6ff;
        font-weight:400;
        font-size:18px;
        text-decoration:underline;
    }

`

export const FormStyle = styled.form`
    display:flex;
    flex-direction:column;
    margin: 100px auto 25px auto;
    
    input{
        width:303px;
        height:45px;
        margin:3px 0;
        border:1px solid #d5d5d5;
        border-radius:5px;
        font-size:20px;
        font-weight:400;
        padding:5px 11px;
    }
    input::placeholder {
        color: #dbdbdb;
    }


    label:last-child > input{
        background-color: #52B6FF;
        color:#fff;   
    }

`