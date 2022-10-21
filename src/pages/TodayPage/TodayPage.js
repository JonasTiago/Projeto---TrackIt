import styled from "styled-components";
import TodayHabit from "./TodayHabit";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useContext, useEffect, useState } from "react";
import { UserAuthContext } from "../../constants/userAuth";
import axios from "axios";
import { URLbase } from "../../constants/URL";
import { SEMANA } from "../../constants/SEMANA";

export default function TodayPage() {
    const { user, performance, setPerformance } = useContext(UserAuthContext);
    const [habitsDay, setHabitsDay] = useState([])
    const [reload, setReload] = useState(false)
    const useAtivo = user.token;


    const dayjs = require('dayjs')
    //numero do dia da semana
    const today = dayjs().day()
    //data de hoje
    const todaydate = dayjs().format("DD/MM")


    function calculatePerformance(dados){
        const total = (dados.filter(hbt => hbt.done === true ).length/dados.length)*100;
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
                setReload(false);
            }) //tudo ok
            .catch(resp => console.log('deu erro'))//quando da erro, mudar depois
    }, [reload]);

    return (
        <>
            <Header userImg={user.image} />
            <TodayStyle progress={!(performance > 1)}>
                {SEMANA.map(d => d.id === today && <h3 key={d.id}> {d.nickName}, {todaydate}</h3>)}
                {!(performance > 1) ? <span>Nenhum hábito concluído ainda</span>
                    : <span>{performance}% dos hábitos concluídos</span>}
                <div>
                    {habitsDay.map(hab =>
                        <TodayHabit key={hab.id} hab={hab} useAtivo={useAtivo} setReload={setReload}/>)}
                </div>
            </TodayStyle>
            <Footer />
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

    h3{
        font-size:22.98px;
        color:#126BA5;
        margin-bottom:5px;
        margin-top:5px;
        margin: 5px 20px;
    }

    span{
        font-size:17.98px;
        color:${props => props.progress ? "#bababa" : "#8FC549"};
        margin: 2px 20px;

        
    }

    
`;