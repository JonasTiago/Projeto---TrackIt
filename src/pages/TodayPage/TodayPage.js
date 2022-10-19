import styled from "styled-components"
import TodayHabit from "./TodayHabit"

export default function TodayPage() {
    return (
        <TodayStyle>
            <h3>Segunda, 17/05</h3>
            <span>Nenhum hábito concluído ainda</span>
            <div>
                <TodayHabit />
                <TodayHabit />
                <TodayHabit />
            </div>
        </TodayStyle>
    )
}

const TodayStyle = styled.div`
    padding:28px 17px;
    display:flex;
    flex-direction:column;
    font-family: 'Lexend Deca',sans-serif;
    font-weight:400;

    h3{
        font-size:22.98px;
        color:#126BA5;
        margin-bottom: 5px;
    }

    span{
        font-size:17.98px;
        color:#bababa;
    }

    div{
        margin:10px auto;
        width:100%;       
    }
`