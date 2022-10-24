import styled from "styled-components";
import TodayHabit from "./TodayHabit";
import Header from "../../components/Header";
import { useContext, useEffect, useState } from "react";
import { UserAuthContext } from "../../constants/userAuth";
import axios from "axios";
import { URLbase } from "../../constants/URL";
import { SEMANA } from "../../constants/SEMANA";
import { useNavigate } from "react-router-dom";

export default function TodayPage() {
    const { user, performance, setPerformance, setUser } = useContext(UserAuthContext);
    const [habitsDay, setHabitsDay] = useState([]);
    const [reloadPage, setReloadPage] = useState(false);
    const useAtivo = user.token;
    const navigate = useNavigate();
    const dayjs = require('dayjs');
    //numero do dia da semana
    const today = dayjs().day();
    //data de hoje
    const todaydate = dayjs().format("DD/MM");


    function calculatePerformance(dados) {
        const total = (dados.filter(hbt => hbt.done === true).length / dados.length) * 100;
        setPerformance(total.toFixed(0));
    };

    //busca os habitos do dia
    useEffect(() => {
        const headers = {
            Authorization: `Bearer ${useAtivo}`
        };
        const url = `${URLbase}/habits/today`;

        axios.get(url, { headers })
            .then(resp => {
                setHabitsDay(resp.data);
                calculatePerformance(resp.data);
            }) //tudo ok
            .catch(resp => {
                console.log('deu erro ' + resp)
                navigate('/')
            })//quando da erro, mudar depois
    }, [reloadPage]);

    return (
        <>
            <Header userImg={user.image} />
            <TodayStyle progress={!(performance > 1)}>
                <div>
                    {SEMANA.map(d => d.id === today && <h3 key={d.id} data-identifier="today-infos"> {d.nickName}, {todaydate}</h3>)}
                    {!(performance > 1)
                        ? <span data-identifier="today-infos">Nenhum hábito concluído ainda</span>
                        : <span data-identifier="today-infos">{performance}% dos hábitos concluídos</span>}
                </div>
                <div>
                    {habitsDay.map(hab =>
                        <TodayHabit key={hab.id}
                            hab={hab}
                            useAtivo={useAtivo}
                            setReloadPage={setReloadPage}
                            reloadPage={reloadPage} />)}
                </div>
            </TodayStyle>
        </>
    );
};

const TodayStyle = styled.div`
    padding:28px 0;
    display:flex;
    flex-direction:column;
    font-family: 'Lexend Deca',sans-serif;
    font-weight:400;
    margin-bottom:73px;
    margin-top:55px;
    margin:55px auto 75px auto;
    
     >div:nth-child(1){
        width:340px;
        height:60px;
        margin: 10px auto;
    } 

    h3{
        font-size:22.98px;
        color:#126BA5;
        margin: 5px 0px;
    }

    span{
        font-size:17.98px;
        color:${props => props.progress ? "#bababa" : "#8FC549"};     
    }
`;