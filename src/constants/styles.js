import styled from "styled-components";

export const BodyStyle = styled.div`
    background-color:#fff;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: space-between;
    width:100vw;
    height:100vh;
    padding-top:25px;

    img{
        width:180px;
        height:86px;
        flex-grow:2;
    }

    

    div{
        flex-grow: 2;
        text-align:center;

        > a{
        color: #52b6ff;
        font-weight:400;
        font-size:18px;
        text-decoration:underline;
        margin-top:10px;
    }
    }

`

export const FormStyle = styled.form`
    display:flex;
    flex-direction:column;
    margin: 0px auto 15px auto;
    
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

    input:disabled{
        color:#AFAFAF;
        background-color:#F2F2F2;
    }

    label:last-child > input{
        background-color: #52B6FF;
        color:#fff;   
    }

`;
