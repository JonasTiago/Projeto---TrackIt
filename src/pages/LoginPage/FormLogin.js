import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { FormStyle } from "../../constants/styles"
import { URLbase } from "../../constants/URL";

export default function FormLogin({setUser}) {
    const navigate = useNavigate()
    const [form, setForm] = useState(
        {
            email: "",
            password: ""
        }
    )

    function fillIn(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    function login(e) {
        e.preventDefault()
        const url = `${URLbase}/auth/login`
        const body = form
        console.log(body)
        axios.post(url, body)
        .then(resp => {
            setUser(resp.data)
            navigate('/hoje')
        }).catch(resp => alert("Erro de login"))
    }

    return (
        <FormStyle onSubmit={login}>
            <label htmlFor="email">
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={fillIn}
                    placeholder="email"
                    required
                />
            </label>
            <label htmlFor="password">
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={fillIn}
                    placeholder="senha"
                    required
                />
            </label>
            <label htmlFor="entrar">
                <input
                    type="submit"
                    name="entrar"
                    value="Entrar"
                />
            </label>
        </FormStyle>
    )
}