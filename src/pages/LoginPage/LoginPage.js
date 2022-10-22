import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import { BodyStyle } from "../../constants/styles";
import { UserAuthContext } from "../../constants/userAuth";
import FormLogin from "./FormLogin";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const { setUser } = useContext(UserAuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('UserOn')) {
            const dadosDeserializados = JSON.parse(localStorage.getItem('UserOn'));
            setUser(dadosDeserializados);
            setTimeout(navigate('/hoje'), 5000);
        }
    }, []);

    return (
        <BodyStyle>
            <img src={Logo} />
            <div>
                <FormLogin setUser={setUser}/>
                <Link to={'/cadastro'} >Não tem uma conta? Cadastre-se!</Link>
            </div>
        </BodyStyle>
    )
};
