import styled from "styled-components"
import { FormStyle } from "../../constants/styles"

export default function FormHabits() {
    return (
        <FormHabitsStyle>
            <FormStyle>
                <label for="">
                    <input type='text' placeholder="nome do hábito" />
                </label>
                <label>
                    <input type="submit" value="D" />
                    <input type="submit" value="S" />
                    <input type="submit" value="T" />
                    <input type="submit" value="Q" />
                    <input type="submit" value="Q" />
                    <input type="submit" value="S" />
                    <input type="submit" value="S" />
                </label>
                <label>
                    <input type="submit" value="Cancelar" />
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
    margin:0;
    padding: 0 15px;
    border-radius:5px;

    form{
        margin:0;
        padding:0;
    }

    label:nth-child(2){
        input{
            width:30px;
            height:30px;
            font-size:19.98px;
            font-weight:400;
            text-align: center;
            padding: 0;
            color:#DBDBDB;
            border:1px solid #DBDBDB;
            background-color:#fff;
            margin: 8px 4px 20px 0;

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