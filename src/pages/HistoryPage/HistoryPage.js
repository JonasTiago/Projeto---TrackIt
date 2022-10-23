import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import { URLbase } from "../../constants/URL";
import { UserAuthContext } from "../../constants/userAuth";
import 'react-calendar/dist/Calendar.css';
import HistoricDay from "./HistoricDay";

export default function HistoryPage() {
    const dayjs = require('dayjs');
    const { user } = useContext(UserAuthContext);
    const navigate = useNavigate();
    const [dates, setDates] = useState([]);
    const [days, setDays] = useState([]);
    const [daySelect, setDaySelect] = useState([]);

    //pegando historico
    useEffect(() => {
        const headers = {
            'Authorization': `Bearer ${user.token}`
        };
        const url = `${URLbase}/habits/history/daily`;
        axios.get(url, { headers }).then(resp => {
            setDates(resp.data.map(hist => hist.habits));
            // console.log(dates)
            // console.log(resp.data.map(hist => hist.habits))
            setDays(resp.data.map(hist => hist.day))
        }).catch(resp => {
            console.log('deu erro');
            navigate('/');
        })//quando da erro, mudar depois
        
    }, []);

    //seleciona os dias com historico
    function tileClassName({ date, view }) {
        //Arry com os resultado dos dias 
        const historyHabtsDone = dates.map(d => d.map(i => i.done)).map(i => i.includes(false));
        //forma o dia para verificação
        const dayNewFormat = dayjs(date).format('DD/MM/YYYY');

        return view === 'month' && days.includes(dayNewFormat) && dayNewFormat !== dayjs().format("DD/MM/YYYY")
            ? (historyHabtsDone[days.indexOf(dayNewFormat)] //verifica se os hbts foram comcluidos
                ? ['classUnCompleted', 'claasDay']
                : ['classCompleted', 'claasDay'])
            : 'claasDay'
    }
    //quando clica em um botão
    function clickDay(value) {
        
        const day = dayjs(value).format('DD/MM/YYYY');
        
        if(days.includes(day)){
            // eslint-disable-next-line react-hooks/exhaustive-deps
            setDaySelect([...daySelect, day]);
        }

    }


    return (
        <div onChange={() => setDaySelect(daySelect.length > 0 && [])}>
            <Header userImg={user.image} />
            <HistoryPageStyle>
                <h3>Histórico</h3>
                {!(dates.length > 0) ? <span>Em breve você poderá ver o histórico dos seus hábitos aqui!</span> :
                    <Calendar
                        calendarType={"US"}
                        tileClassName={tileClassName}
                        onChange={ clickDay }
                    />}
            </HistoryPageStyle>
            {daySelect.length > 0 && <HistoricDay
                setDaySelect={setDaySelect}
                daySelect={daySelect}
                dates={dates}
                days={days} />}
        </div>
    )
}

const HistoryPageStyle = styled.div`
        display:flex;
        justify-content:center;
        flex-direction:column;
        padding:5px 17px;
        font-family: 'Lexend Deca',sans-serif;
        font-weight:400;
        /* margin-top: 65px; */
        margin:65px auto 0 auto;
        width:100%;

        h3{
            color:#126BA5;
            font-size:22.98px;
            margin:28px 0 20px 0;
            
        }

        span{
            font-size:17.98px;
            color:#666;
            margin-bottom:50px;
        }

        > div{
            max-width:355px;
            width:335px;
            max-height:402px;
            height:402px;

            margin:auto;
            border-radius:10px;
            border:none;
        }

        .classCompleted {
            background-color:#8ccb4f;
            border-radius:100px;
        }
        .classUnCompleted {
            border-radius:100px;
            background-color:#e25b70; 

        }

        .claasDay{
            margin:8px 5px 8px 7px;
            padding:0px; 
            max-width:35px;
            min-width: 35px;
            min-height:35px;
            max-height:35px;
        }
`;
