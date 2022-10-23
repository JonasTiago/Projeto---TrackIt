import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import { Calendar } from "react-calendar";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { URLbase } from "../../constants/URL";
import { UserAuthContext } from "../../constants/userAuth";
import 'react-calendar/dist/Calendar.css';

export default function HistoryPage() {
    const dayjs = require('dayjs');
    const { user } = useContext(UserAuthContext);
    const navigate = useNavigate();
    const [value, setValue] = useState()

    const [dates, setDates] = useState([]);
    const [days, setDays] = useState([])

    //pegando historico
    useEffect(() => {
        const headers = {
            'Authorization': `Bearer ${user.token}`
        };
        const url = `${URLbase}/habits/history/daily`;

        axios.get(url, { headers }).then(resp => {

            setDates(resp.data);
            setDays(resp.data.map(hist => hist.day))

        }).catch(resp => {
            console.log('deu erro')
            navigate('/')
        })//quando da erro, mudar depois
    }, []);

    console.log(dates/*.map(hb => hb.habits).map(it => it)*/)
    // dates.length > 0 && console.log(dates.map(dt => dt.habits).map(hb => hb.date))



    function tileClassName({ date, view }) {

        const dayNewFormat = dayjs(date).format('DD/MM/YYYY');

        return view === 'month' && days.includes(dayNewFormat) && dayNewFormat !== dayjs().format("DD/MM/YYYY") ?
            ['class', 'claasDay']
            : 'claasDay'
    }



    return (
        <>
            <Header userImg={user.image} />
            <HistoryPageStyle>
                <h3>Histórico</h3>
                {/* <span>Em breve você poderá ver o histórico dos seus hábitos aqui!</span> */}
                <Calendar
                    velue={value}
                    onChange={setValue}
                    calendarType={"US"}
                    tileClassName={tileClassName}
                />
            </HistoryPageStyle>
            <Footer />
        </>
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
            margin-bottom:20px;
            margin-top:28px;
            
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
        }

        .class {
            background-color:#8ccb4f;
            border-radius:100px;
            /* background-color:#e25b70 */
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
