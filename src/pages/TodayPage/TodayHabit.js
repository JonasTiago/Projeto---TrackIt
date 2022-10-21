import styled from "styled-components";
import ceta from "../../assets/images/Vector.svg";
import axios from "axios";
import { URLbase } from "../../constants/URL";

export default function TodayHabit({ hab, useAtivo, setReload }) {
    const { currentSequence, done, highestSequence, name, id } = hab;

    function concluirHabito(idHabt, doneHabt) {

        const headers = {
            'Authorization': `Bearer ${useAtivo}`
        };
        const url = `${URLbase}/habits/${idHabt}`;

        if (!doneHabt) {

            const body = { done: true }
            axios.post(`${url}/check`, body, { headers })
                .then(resp => {
                    console.log(resp)
                    setReload(true)
                }) //tudo ok
                .catch(resp => console.log('erro', resp.data))//quando da erro, mudar depois
        } else {
            const body = { done: false }
            axios.post(`${url}/uncheck`, body, { headers })
                .then(resp => {
                    setReload(true)
                }) //tudo ok
                .catch(resp => console.log('erro', resp.data))
        }
    }



    return (
        <TodayHabitStyle estado={done} record={currentSequence == highestSequence}>
            <div>
                <h4>{name}</h4>
                <p>Sequência atual: <span>{currentSequence} dias</span></p>
                <p>Seu recorde: <span>{highestSequence} dias</span></p>
            </div>
            <button onClick={() => concluirHabito(id, done)}>
                <img src={ceta} />
            </button>
        </TodayHabitStyle>
    )
};

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

        p:nth-child(2){
            font-size:12.98px;
            color:#666;
            margin-bottom: 3px;
                > span{
                color:${props => props.estado ? "#8FC549" : "#bababa"};
                font-size:12.98px;
                margin-bottom: 3px;
                }
            
        }

        p:nth-child(3){
            font-size:12.98px;
            color:#666;
            margin-bottom: 3px;
                > span{
                color:${props => props.record ? "#8FC549" : "#bababa"};
                font-size:12.98px;
                margin-bottom: 3px;
                }
        }
    }

    button{
        width:69px;
        height:69px;
        border:none;
        border-radius:5px;
        margin:0;
        background-color: ${props => props.estado ? '#8FC549' : '#E7E7E7'} ;
        
        img{
            width:35.05px;
            height:28px;
        }
    }
`;