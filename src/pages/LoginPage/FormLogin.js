import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormStyle } from "../../constants/styles";
import { URLbase } from "../../constants/URL";
import styled from "styled-components";
import { ThreeDots } from 'react-loader-spinner';

export default function FormLogin({ setUser }) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState(
        {
            email: "",
            password: ""
        }
    );

    function fillIn(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    function login(e) {
        e.preventDefault();
        setLoading(true);
        //
        const url = `${URLbase}/auth/login`;
        const body = form;
        //tempo para o efeito
        setTimeout(() => {
            axios.post(url, body)
                .then(resp => {
                    setUser(resp.data);
                    const dadosSerializados = JSON.stringify(resp.data);
                    localStorage.setItem('UserOn', dadosSerializados);
                    navigate('/hoje');
                })
                .catch(resp => {
                    alert(resp.response.data.message)
                    setLoading(false)
                })
        }, 1000);
    };

    return (
        <FormStyle onSubmit={login}>
            <label htmlFor="email">
                <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={fillIn}
                    placeholder="email"
                    disabled={loading}
                    required
                    autoComplete="off"
                    data-identifier="input-email"
                />
            </label>
            <label htmlFor="password">
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={fillIn}
                    placeholder="senha"
                    disabled={loading}
                    required
                    data-identifier="input-password"
                />
            </label>
            <label htmlFor="entrar">
                {!loading ? <input
                    type="submit"
                    name="entrar"
                    value="Entrar"
                    data-identifier="login-btn"
                /> :
                    <BntStyle disabled>
                        <ThreeDots
                            height="12"
                            width="80"
                            radius="9"
                            color="#fff"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                            data-identifier="login-btn"
                        />
                    </BntStyle>}
            </label>
        </FormStyle>
    )
}

const BntStyle = styled.button`
        width:303px;
        padding-left: 110px;
        height:45px;
        margin:3px 0;
        border:1px solid #d5d5d5;
        border-radius:5px;
        background-color: #52B6FF;
        opacity:0.7;
`;