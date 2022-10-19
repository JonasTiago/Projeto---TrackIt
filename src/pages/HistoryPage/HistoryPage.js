import styled from "styled-components"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

export default function HistoryPage() {
    return (
        <>
            <Header userImg={'https://s2.glbimg.com/5IEojOCGN6bgFV5L2K_RKB5dtvk=/e.glbimg.com/og/ed/f/original/2020/03/31/cat-4548812_960_720.jpg'} />
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

        h3{
            color:#126BA5;
            font-size:22.98px;
            margin-bottom:20px;
            margin-top:28px;

        }

        span{
            font-size:17.98px;
            color:#666;
        }
`