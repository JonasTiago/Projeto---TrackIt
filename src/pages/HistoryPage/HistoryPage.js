import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { URLbase } from "../../constants/URL";
import { UserAuthContext } from "../../constants/userAuth";
// import Calendar from "react-calendar"
// import 'react-calendar/dist/Calendar.css';


export default function HistoryPage() {
    const { user } = useContext(UserAuthContext);
    const navigate = useNavigate()



    //pegando historico
    useEffect(() => {
        const headers = {
            'Authorization': `Bearer ${user.token}`
        };
        const url = `${URLbase}/habits/history/daily`;

        axios.get(url, { headers })
            .then(resp => {
                console.log(resp.data)
            }) //tudo ok
            .catch(resp => {
                console.log('deu erro')
                navigate('/')
            })//quando da erro, mudar depois
    }, []);



    return (
        <>
            <Header userImg={user.image} />
            <HistoryPageStyle>
                <h3>Histórico</h3>
                <span>Em breve você poderá ver o histórico dos seus hábitos aqui!</span>
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
        margin-top: 65px;

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
`;

const CalendarStyle = styled.div`
    /* color:green; */
`;

