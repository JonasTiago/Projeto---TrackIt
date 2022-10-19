import styled from "styled-components"
import ceta from "../../assets/images/Vector.svg"

export default function TodayHabit() {
    return (
        <TodayHabitStyle>
            <div>
                <h4>Ler 1 capítulo de livro</h4>
                <span>Sequência atual: 3 dias</span>
                <span>Seu recorde: 5 dias</span>
            </div>
            <button><img src={ceta} /></button>
        </TodayHabitStyle>
    )
}

const TodayHabitStyle = styled.div`
    width:340px;
    height:94px;
    background-color:#fff;
    font-family: 'Lexend Deca',sans-serif;
    display:flex;
    justify-content: space-between;
    padding:13px 10px;
    margin:0;
    border-radius:5px;

    div{
        display:flex;
        flex-direction:column;
        width:75%;
        margin-top:5px;

        h4{
            font-size:19.98px;
            color:#666666;
            margin-bottom:7px;
            margin-top:0;
        }

        span{
            font-size:12.98px;
            color:#666;
            margin-bottom: 3px;
        }
    }

    button{
        width:69px;
        height:69px;
        border:none;
        border-radius:5px;
        margin:0;
        background-color:#8FC549;
        
        img{
            width:35.05px;
            height:28px;
        }
    }
`