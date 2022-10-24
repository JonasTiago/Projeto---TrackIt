import styled from "styled-components";
import ceta from "../../assets/images/Vector.svg";
import axios from "axios";
import { URLbase } from "../../constants/URL";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TodayHabit({ hab, useAtivo, setReloadPage, reloadPage }) {
    const { currentSequence, done, highestSequence, name, id } = hab;
    const [click, setClick] = useState(done);
    const navigate = useNavigate()

    function concluirHabito(idHabt, doneHabt) {

        const headers = {
            'Authorization': `Bearer ${useAtivo}`
        };
        const url = `${URLbase}/habits/${idHabt}`;

        if (!doneHabt) {

            const body = { done: true };
            axios.post(`${url}/check`, body, { headers })
                .then(resp => {
                    //recarrega a page de hoje
                    setReloadPage(!reloadPage);
                }) //tudo ok
                .catch(resp => {
                    alert(`${resp.response.data.message}, check apenas uma vez!`);
                    navigate("/");
                })//quando da erro, mudar depois


        } else {
            const body = { done: false }
            axios.post(`${url}/uncheck`, body, { headers })
                .then(resp => {
                    //recarrega a page de hoje
                    setReloadPage(!reloadPage);
                }) //tudo ok
                .catch(resp => {
                    alert(`${resp.response.data.message}, check apenas uma vez!`);
                    navigate("/");
                })
        };
    };

    return (
        <HabitStyle
            estado={click}
            record={currentSequence === highestSequence}
            data-identifier="today-infos">
            <div >
                <h4>{name}</h4>
                <p>Sequência atual:  <span>{currentSequence} dias</span></p>
                <p>Seu recorde:  <span>{highestSequence} dias</span></p>
            </div>
            <button onClick={() => {
                concluirHabito(id, done)
                setClick(click ? false : true)

            }}
                data-identifier="done-habit-btn"
            >
                <img src={ceta} alt="icon de confirmação"/>
            </button>
        </HabitStyle>
    )
};

const HabitStyle = styled.div`
    width:340px;
    height:94px;
    background-color:#fff;
    font-family: 'Lexend Deca',sans-serif;
    display:flex;
    justify-content: space-between;
    padding:13px 10px;
    margin:10px auto;
    border-radius:5px;

    >div{
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
                margin: 0 0 3px  0;
                
                }
            
        }

        p:nth-child(3){
            font-size:12.98px;
            color:#666;
            margin-bottom: 3px;
                > span{
                color:${props => props.record ? "#8FC549" : "#bababa"};
                font-size:12.98px;
                margin: 0 0 3px  0;
                }
        }
    }

   > button{
        width:69px;
        height:69px;
        border:none;
        border-radius:5px;
        margin:0;
        padding:0;
        background-color: ${props => props.estado ? '#8FC549' : '#E7E7E7'} ;
        
        img{
            width:35.05px;
            height:28px;margin:0;
        padding:0;
        }
    }
`;