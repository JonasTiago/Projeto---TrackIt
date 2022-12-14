import styled from "styled-components";

export default function Header ({userImg}){
    return (
        <HeaderStyle>
            <h1>TrackIt</h1>
            <img src={userImg} data-identifier="avatar" alt="avatar"/>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.div`
    background-color: #126BA5;
    width:100vw;
    height:75px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 10px 18px;
    position:fixed;
    left:0;
    top:0;
    z-index:5;
    
    h1{
        color:#fff;
        font-size:42px;
        font-family: 'Playball', cursive;
        line-height:49px;
    }
    
    img{
        width:51px;
        height:51px;
        border-radius:100px;
    }
`;