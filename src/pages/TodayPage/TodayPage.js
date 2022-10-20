import styled from "styled-components";
import TodayHabit from "./TodayHabit";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useContext } from "react";
import { UserAuthContext } from "../../constants/userAuth";

export default function TodayPage() {
    const {user} = useContext(UserAuthContext);

    return (
        <>
            <Header userImg={'https://s2.glbimg.com/5IEojOCGN6bgFV5L2K_RKB5dtvk=/e.glbimg.com/og/ed/f/original/2020/03/31/cat-4548812_960_720.jpg'} />
            <TodayStyle>
                <h3>Segunda, 17/05</h3>
                <span>Nenhum hábito concluído ainda</span>
                <div>
                    
                </div>
            </TodayStyle>
            <Footer />
        </>
    );
};

const TodayStyle = styled.div`
    padding:28px 17px;
    display:flex;
    flex-direction:column;
    font-family: 'Lexend Deca',sans-serif;
    font-weight:400;

    h3{
        font-size:22.98px;
        color:#126BA5;
        margin-bottom:5px;
        margin-top:5px;
    }

    span{
        font-size:17.98px;
        color:#bababa;
    }

    div{
        margin:10px auto;
        width:100%;       
    }
`;