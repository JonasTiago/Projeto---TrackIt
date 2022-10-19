import styled from "styled-components"
import FormHabits from "./FormHabits"
import Habits from "./Habits"
import Header from "../../components/Header";
import Footer from "../../components/Footer";


export default function HabitsPage() {

    function test() {
        console.log('oi')
    }

    return (
        <>
            <Header userImg={'https://s2.glbimg.com/5IEojOCGN6bgFV5L2K_RKB5dtvk=/e.glbimg.com/og/ed/f/original/2020/03/31/cat-4548812_960_720.jpg'} />
            <HabitsPageStyle>
                <div>
                    <h3>Meus hábitos</h3>
                    <button onClick={test}>+</button>
                </div>
                <FormHabits />
                <Habits />
                <Habits />
                <Habits />

                <span>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </span>
            </HabitsPageStyle>
            <Footer />
        </>
    )
}

const HabitsPageStyle = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    padding:5px 17px;
    font-family: 'Lexend Deca',sans-serif;
    font-weight:400;

    div{
        display:flex;
        justify-content:space-between;
        /* align-items:center; */
        margin:5px 0 10px 0;
        width:340px; 

        h3{
            color:#126BA5;
            font-size:22.98px;
            margin-bottom:5px;
            margin-top:5px;

        }

        button{
            width:40px;
            height:35px;
            background-color:#52B6FF;
            font-size:27px;
            font-family: 'Lexend Deca',sans-serif;
            font-weight:400;
            text-align:center;
            border:none;
            border-radius:4.5px;
            color:#fff;
        }
    }

    span{
        font-size:17.98px;
        font-weight:400;
        color:#666666;
        font-family: 'Lexend Deca',sans-serif;
        line-height:22px;
        margin-top:20px;
        margin-bottom:110px;
        width:340px;
    }
`
