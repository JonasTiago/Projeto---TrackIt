import styled from "styled-components"
import FormHabits from "./FormHabits"
import Habits from "./Habits"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useContext, useEffect, useState } from "react";
import { UserAuthContext } from "../../constants/userAuth";
import { URLbase } from "../../constants/URL";
import axios from "axios";
import { SEMANA } from "../../constants/SEMANA"

export default function HabitsPage() {
    const { user } = useContext(UserAuthContext);
    const [add, setAdd] = useState(false)
    const [habits, setHabits] = useState(false)
    const [reload, setReload] = useState(false)
    const useAtivo = user.token;

    function togglerForm() {
        setAdd(add ? false : true)
    }

    useEffect(() => {
        const url = `${URLbase}/habits`
        axios.get(url, { headers: { Authorization: `Bearer ${user.token}` } })
            .then(resp => {
                setHabits(resp.data)
                setReload(false)
            })
            .catch(resp => console.log(resp))
    }
        , [reload])

    return (
        <>
            <Header userImg={user.image} />
            <HabitsPageStyle visible={add}>
                <div>
                    <h3>Meus hábitos</h3>
                    <button onClick={togglerForm}>+</button>
                </div>
                <div >
                    <FormHabits
                        setReload={setReload}
                        SEMANA={SEMANA}
                        setAdd={setAdd}
                        useAtivo={useAtivo}
                        togglerForm={togglerForm}
                    />
                </div>
                <>
                    {habits.length > 0 ?
                        habits.map(hab => <Habits
                            setReload={setReload}
                            key={hab.id}
                            useAtivo={useAtivo}
                            id={hab.id}
                            name={hab.name}
                            days={hab.days}
                            SEMANA={SEMANA} />)
                        :
                        <span>
                            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                        </span>
                    }
                </>

            </HabitsPageStyle>
            <Footer />
        </>
    )
}

const HabitsPageStyle = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    padding:5px 17px;
    font-family: 'Lexend Deca',sans-serif;
    font-weight:400;
    margin-top:80px;
    margin-bottom:100px;

    div{
        display:flex;
        justify-content:space-between;
        /* align-items:center; */
        margin:5px 0 8px 0;
        width:340px; 

        h3{
            color:#126BA5;
            font-size:22.98px;
            margin-bottom:5px;
            margin-top:5px;

        }

        > button{
            width:40px;
            height:35px;
            background-color:#52B6FF;
            font-size:27px;
            font-family: 'Lexend Deca',sans-serif;
            font-weight:400;
            border:none;
            border-radius:4.5px;
            color:#fff;
        }
    }

    > div:nth-child(2){
        display: ${props => props.visible ? '' : 'none'};
    }

    span{
        font-size:17.98px;
        font-weight:400;
        color:#666666;
        font-family: 'Lexend Deca',sans-serif;
        line-height:22px;
        margin-top:20px;
        margin-bottom:110px;
        width:340px;
    }
`
