import axios from "axios";
import styled from "styled-components";
import trash from "../../assets/images/trash.svg";
import trashIn from "../../assets/images/trash2.svg";
import { URLbase } from "../../constants/URL";

export default function Habits({ setReload, useAtivo, id, name, days, SEMANA }) {

    function deleteHabit(idHabit) {
        const headers = {
            'Authorization': `Bearer ${useAtivo}`
        };
        const url = `${URLbase}/habits/${idHabit}`;

        axios.delete(url, { headers })
            .then(resp => {    
                setReload(true);
            })
            .catch(resp => console.log(resp.response.data.message))

    };

    return (
        <HabitsStyle>
            <h4>{name}</h4>
            <TrashStyle onClick={() => window.confirm("Deseja deletar esse habito?") && deleteHabit(id)}>
                <img src={trash} />
                <img src={trashIn} />
            </TrashStyle>
            <label>
                {SEMANA.map(day => <button
                    key={day.id}
                    type="button"
                    disabled={days.includes(day.id)}
                >{day.name}</button>)}
            </label>
        </HabitsStyle>
    )
}

const HabitsStyle = styled.div`
    background-color:#fff;
    width:340px;
    height:91px;
    display:flex;
    flex-direction:column;
    padding:14px;
    position:relative;
    border-radius:5px;
    margin:10px 0 0 0;

    h4{
        font-size:19.98px;
        width:90%;
        margin-top:5px;
        margin-bottom:9px;
        font-family: 'Lexend Deca',sans-serif;
        font-weight:400;
        color:#666666;

    }

    label{
       > button{
            width:30px;
            height:30px;
            font-size:19.98px;
            font-weight:400;
            text-align: center;
            padding: 3.5px;
            color:#DBDBDB;
            border:1px solid #DBDBDB;
            border-radius:5px;
            background-color:#fff;
            margin: 0px 4px 20px 0;

        }
       > button:disabled{
            background-color:#DBDBDB;
            color:#fff;
        }
    }
`;

const TrashStyle = styled.div`
    position:absolute;
    top:5px;
    right:5px;

    img:first-child{
        position:absolute;
        top:2px;
        right:7.3px;
        width:16px;
    }

    img:last-child{
        position:absolute;
        top:7.55px;
        right:11.5px;
        width:8px;
    }
`;