import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { FormStyle } from "../../constants/styles"
import { URLbase } from "../../constants/URL";

export default function FormRegistration() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
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
        e.preventDefault()
        const url = `${URLbase}/auth/sign-up`;
        const body = form;
        console.log(body)
        setLoading(true)
         axios.post(url, body)
         .then(resp =>  navigate("/"))
         .catch(resp => alert(resp.message));
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
                    required disabled={loading}/>
            </label>
            <label htmlFor="password">
                <input
                    name="password"
                    type="password"
                    placeholder="senha"
                    value={form.password}
                    onChange={fillIn}
                    required disabled={loading}/>
            </label>
            <label htmlFor="name">
                <input
                    name="name"
                    type="text"
                    placeholder="nome"
                    value={form.name}
                    onChange={fillIn}
                    required disabled={loading}/>
            </label>
            <label htmlFor="image">
                <input
                    name="image"
                    type="text"
                    placeholder="foto"
                    value={form.image}
                    onChange={fillIn}
                    required disabled={loading}/>
            </label>
            <label htmlFor="cadastrar">
                <input type="submit" value="Cadastrar" name="cadastrar" disabled={loading}/>
            </label>
        </FormStyle>
    );
};