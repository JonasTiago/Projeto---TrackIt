import axios from "axios"
import { useState } from "react"
import styled from "styled-components"
import { FormStyle } from "../../constants/styles"
import { URLbase } from "../../constants/URL"
import { ThreeDots } from 'react-loader-spinner';

export default function FormHabits({ setReload, setAdd, useAtivo, togglerForm, SEMANA }) {
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: "",
        days: []
    })

    function fillIn(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    function fillDays(day) {
        setForm({
            ...form,
            days: !form.days.includes(day) ? [...form.days, day] : form.days.filter(d => d !== day)
        });
    };

    function createHabit(e) {
        e.preventDefault();

        setLoading(true)

        const url = `${URLbase}/habits`;
        const body = form;

        setTimeout(() => {
            axios.post(url, body, { headers: { Authorization: `Bearer ${useAtivo}` } })
                .then(resp => {
                    togglerForm()
                    setReload(true)
                    setForm({
                        name: "",
                        days: []
                    })
                    setLoading(false)
                })
                .catch(resp => {
                    console.log(resp.response.data.message && alert('Usuario Off'))
                    setLoading(false)
                });
        }, 1000)
    }

    return (
        <FormHabitsStyle onSubmit={createHabit}>
            <FormStyle>
                <label htmlFor="name">
                    <input name="name"
                        value={form.name}
                        type='text'
                        placeholder="nome do hábito"
                        onChange={fillIn}
                        required
                        disabled={loading}
                    />
                </label>
                <label htmlFor="days">
                    {SEMANA.map(d => <ButtonStyle
                        clic={form.days.includes(d.id) ? true : false}
                        disabled={loading}
                        key={d.id}
                        type="button"
                        name='days'
                        value={d.id}
                        onClick={(e) => fillDays(d.id)}>
                        {d.name}
                    </ButtonStyle>)}
                </label>
                <label htmlFor="click">
                    <input type="button" name="click" value="Cancelar" onClick={() => setAdd(false)} />
                    {!loading ?
                        <input type="submit" value="Salvar" name="click"/>
                        :
                        <BntStyle disabled>
                            <ThreeDots
                                height="20"
                                width="50"
                                radius="9"
                                color="#fff"
                                ariaLabel="three-dots-loading"
                                visible={true}
                            />
                        </BntStyle>
                    }
                </label>
            </FormStyle>
        </FormHabitsStyle>
    )
}

const FormHabitsStyle = styled.div`
    font-family: 'Lexend Deca',sans-serif;
    background-color:#fff;
    display: flex;
    align-items:center;
    justify-content:center;
    width:340px;
    height:180px;
    margin:auto;
    border-radius:5px;

    form{
        margin:auto;
        padding:auto;
    }

    /* label:nth-child(2){
       > button{
            width:30px;
            height:30px;
            font-size:19.98px;
            font-weight:400;
            text-align: center;
            color:#DBDBDB;
            border:1px solid #DBDBDB;
            background-color: ${props => props.clic ? '#fff' : '#DBDBDB'};
            margin: 8px 4px 20px 0;

        }
        
       > button:disabled{
            background-color:#DBDBDB;
            color:#fff;
        } 

    }*/

    label:nth-child(3){
        align-self: flex-end;
        display:flex;

        input:nth-child(1){
            background-color:#fff;
            color:#52B6FF;
            width:84px;
            height:35px;
            font-size:15.98px;
            font-weight:400;
            border:none;
            margin-right:15px;
        }

        input:nth-child(2){
            background-color:#52B6FF;
            color:#fff;
            width:84px;
            height:35px;
            font-size:15.98px;
            font-weight:400;
        }
    } 
`;

const ButtonStyle = styled.button`
        width:30px;
        height:30px;
        font-size:19.98px;
        font-weight:400;
        text-align: center;
        color:${props => !props.clic ? '#DBDBDB' : '#fff'};
        border:1px solid #DBDBDB;
        background-color: ${props => !props.clic ? '#fff' : '#DBDBDB'};
        margin: 8px 4px 20px 0;
        
        
       &&:disabled{
            background-color:#DBDBDB;
            color:#fff;
        } 
`;

const BntStyle = styled.button`
            background-color:#52B6FF;
            color:#fff;
            width:84px;
            height:35px;
            border-radius:5px;
            border:none;
            padding-left:17px;
            padding-top:2px;

            >div{
                
                width:84px;
                height:35px;
            }
`;