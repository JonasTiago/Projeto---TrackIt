import styled from "styled-components"
import FormHabits from "./FormHabits"
import Habits from "./Habits"

export default function HabitsPage() {

    function test() {
        console.log('oi')
    }

    return (
        <HabitsPageStyle>
            <div>
                <h2>Meus hábitos</h2>
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
    )
}

const HabitsPageStyle = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    padding:5px 17px;

    div{
        display:flex;
        justify-content:space-between;
        /* align-items:center; */
        margin:5px 0 10px 0;
        width:340px; 

        h2{
            color:#126BA5;
            font-size:23px;
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
