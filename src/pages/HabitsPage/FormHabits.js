import axios from "axios"
import { useState } from "react"
import styled from "styled-components"
import { FormStyle } from "../../constants/styles"
import { URLbase } from "../../constants/URL"

export default function FormHabits({ setAdd, useAtivo, togglerForm}) {

    const semana = [{ id: 0, name: "D" }, {
        id: 1, name: "S"
    }, { id: 2, name: "T" }, { id: 3, name: "Q" }, { id: 4, name: "Q" }, { id: 5, name: "S" }, { id: 6, name: "S" }]

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

    function createHabit(e) {
        console.log(useAtivo)
        console.log(form);
        e.preventDefault();
        const url = `${URLbase}/habits`;
        const body = form;
        axios.post(url, body, {headers:{ Authorization:`Bearer ${useAtivo}`}})
        .then(resp => {console.log('ok') 
        togglerForm()})
        .catch(resp => console.log('not'));
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
                    />
                </label>
                <label>
                    {semana.map(d => <button
                        disabled={form.days.includes(d.id) ? true : false}
                        key={d.id}
                        type="button"
                        name='days'
                        value={d.id}
                        onClick={() => setForm({ ...form, days: [...form.days, d.id] })}>
                        {d.name}
                    </button>)}
                </label>
                <label>
                    <input type="button" value="Cancelar" onClick={() => setAdd(false)} />
                    <input type="submit" value="Salvar" />
                </label>
            </FormStyle>
        </FormHabitsStyle>
    )
}

const FormHabitsStyle = styled.div`
    font-family: 'Lexend Deca',sans-serif;
    background-color:#fff;
    display:flex;
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

    label:nth-child(2){
        button{
            width:30px;
            height:30px;
            font-size:19.98px;
            font-weight:400;
            text-align: center;
            color:#DBDBDB;
            border:1px solid #DBDBDB;
            background-color:#fff;
            margin: 8px 4px 20px 0;

        }
        
        button:disabled{
            background-color:#DBDBDB;
            color:#fff;
        }

    }

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

    
`