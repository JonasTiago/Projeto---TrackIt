import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormStyle } from "../../constants/styles";
import { URLbase } from "../../constants/URL";
import { ThreeDots } from 'react-loader-spinner';
import styled from "styled-components";

export default function FormRegistration() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState(
        {
            email: "",
            name: "",
            image: "",
            password: ""
        }
    );

    function fillIn(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    function register(e) {
        e.preventDefault();
        setLoading(true);

        const url = `${URLbase}/auth/sign-up`;
        const body = form;

        setTimeout(() => {
            axios.post(url, body)
                .then(resp => navigate("/"))
                .catch(resp => {
                    alert(resp.response.data.message)
                    setLoading(false)
                });
        }, 1000);
    };

    return (
        <FormStyle onSubmit={register}>
            <label htmlFor="email">
                <input
                    name="email"
                    type="email"
                    placeholder="email"
                    value={form.email}
                    onChange={fillIn}
                    autoComplete="off"
                    required
                    disabled={loading}
                />
            </label>
            <label htmlFor="password">
                <input
                    name="password"
                    type="password"
                    placeholder="senha"
                    value={form.password}
                    onChange={fillIn}
                    required
                    disabled={loading} />
            </label>
            <label htmlFor="name">
                <input
                    name="name"
                    type="text"
                    placeholder="nome"
                    value={form.name}
                    onChange={fillIn}
                    autoComplete="off"
                    required
                    disabled={loading}
                />
            </label>
            <label htmlFor="image">
                <input
                    name="image"
                    type="text"
                    placeholder="foto"
                    value={form.image}
                    onChange={fillIn}
                    required
                    autoComplete="off"
                    disabled={loading} />
            </label>
            <label htmlFor="cadastrar">
                {!loading ? <input type="submit"
                    value="Cadastrar"
                    name="cadastrar"
                    disabled={loading} />
                    : <BntStyle disabled>
                        <ThreeDots
                            height="12"
                            width="80"
                            radius="9"
                            color="#fff"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />
                    </BntStyle>}
            </label>
        </FormStyle>
    );
};

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