import styled from "styled-components";

export default function HistoricDay({ setDaySelect, daySelect, dates, days }) {

    const habitsDay = dates.map(d => d.map(i => i.name))[days.indexOf(daySelect[0])];
    const statHabs = dates.map(d => d.map(i => i.done))[days.indexOf(daySelect[0])];

    return (
        <HistoricDayStyle onClick={() => setDaySelect([])} >
            <div>
                <h5><span>{daySelect}</span></h5>
                <ul>
                    {habitsDay.map((hab, i) => <div key={i}>
                        {statHabs[i] ? <HabtOkStyle type={"checkbox"} onChange={() => statHabs[i]} 
                        checked={true}
                        /> :
                            <HabtOvStyle type={"checkbox"}
                            />}<li>{hab}</li>
                    </div>)}

                </ul>
            </div>
        </HistoricDayStyle>
    )
}

const HistoricDayStyle = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100vw;
    height:100vh;

     > div{
        
            background-color:#fff;
            border-radius:10px;
            border:none;
            width:20rem;
            height:350px;
            margin: 55% auto;
            box-shadow:0px 0px 3px #9ca3af;
            padding:10px 15px;
            font-family: 'Lexend Deca',sans-serif;
            font-weight:400;
            
            h5{
                color:#126BA5;
                font-size:23px;
                text-align:center;
                margin-bottom:15px;
            }

            

            ul{
                text-align:center;
                font-size:20px;
                margin:20px 0 0 15px;

                > div{
                    display:flex;  

                    li{
                        color:green;
                        margin:6px 15px;
                    }
                }
            }
            
        }

        
    
`;

const HabtOkStyle = styled.input`
                        &&[type=checkbox] {
                            position: relative;
                            cursor: pointer;
                            
                            }

                            &&[type=checkbox]:before {
                            content: "";
                            display: block;
                            position: absolute;
                            width: 22px;
                            height: 22px;
                            top: 0;
                            left: 0;
                            background-color:#8ccb4f;
                            
                            }

                            &&[type=checkbox]:checked:after {
                            content: "";
                            display: block;
                            width: 5px;
                            height: 10px;
                            border: solid white;
                            border-width: 0 3px 3px 0;
                            -webkit-transform: rotate(45deg);
                            -ms-transform: rotate(45deg);
                            transform: rotate(45deg);
                            position: absolute;
                            top: 5px;
                            left: 9px;
                            }
                            
`

const HabtOvStyle = styled.input`
                        &&[type=checkbox] {
                            position: relative;
                            cursor: pointer;
                            
                            }

                            &&[type=checkbox]:before {
                            content: "";
                            display: block;
                            position: absolute;
                            width: 22px;
                            height: 22px;
                            top: 0;
                            left: 0;
                            background-color:#e25b70;
                            
                            }

                            &&[type=checkbox]:checked:after {
                            content: "";
                            display: block;
                            width: 5px;
                            height: 10px;
                            border: solid white;
                            border-width: 0 3px 3px 0;
                            -webkit-transform: rotate(45deg);
                            -ms-transform: rotate(45deg);
                            transform: rotate(45deg);
                            position: absolute;
                            top: 5px;
                            left: 9px;
                            color:red;
                            }
`

