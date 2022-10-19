import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import styled from "styled-components"
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";


export default function Footer() {
    const porcentagem = 60;
    return (

        <FooterStyle>
            <Link to={'/habitos'}>
                Hábitos
            </Link>
            <div>
                <CircularProgressbar
                    value={porcentagem}
                    text={`Hoje`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent",
                        
                    })}
                />
            </div>
            <Link>
                Histórico
            </Link>
        </FooterStyle>
    )

}

const FooterStyle = styled.footer`
    position:fixed;
    bottom: 0;
    left:0;
    height:70px;
    width:100vw;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 0 30px;
    background-color:#fff;

    a{
        font-family: 'Lexend Deca',sans-serif;
        font-size:17.98px;
        color:#52B6FF;
    }

    div{
        width:91px;
        height:91px;
        margin:0 auto 40px auto;
    }

    
`