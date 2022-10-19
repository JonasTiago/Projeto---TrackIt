import styled from "styled-components"
import trash from "../../assets/images/trash.svg"
import trashIn from "../../assets/images/trash2.svg"



export default function Habits() {
    return (
        <HabitsStyle>
                <h3>Ler 1 capítulo de livro</h3>
                <TrashStyle>
                    <img src={trash}/>
                    <img src={trashIn}/>
                </TrashStyle>
            <label>
                <input type="submit" value="D" />
                <input type="submit" value="S" />
                <input type="submit" value="T" />
                <input type="submit" value="Q" />
                <input type="submit" value="Q" />
                <input type="submit" value="S" />
                <input type="submit" value="S" />
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
    margin:0;

    h3{
        font-size:19.98px;
        width:90%;
        margin-top:5px;
        margin-bottom:8px;
        font-family: 'Lexend Deca',sans-serif;
        font-weight:400;
        color:#666666;

    }

    label{
        input{
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
    }
`

const TrashStyle = styled.div`
    position:absolute;
    top:0;
    right:0;

    img:first-child{
        position:absolute;
        top:0px;
        right:5.3px;
        width:16px;
    }

    img:last-child{
        position:absolute;
        top:5.55px;
        right:9.5px;
        width:8px;
    }
`