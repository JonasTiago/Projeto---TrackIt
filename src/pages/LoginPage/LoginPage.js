import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import { BodyStyle } from "../../constants/styles";
import { UserAuthContext } from "../../constants/userAuth";
import FormLogin from "./FormLogin";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const { setUser } = useContext(UserAuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('UserOn')) {
            const dadosDeserializados = JSON.parse(localStorage.getItem('UserOn'));
            setUser(dadosDeserializados);
            navigate('/hoje')
        }
    }, []);

    return (
        <BodyStyle>
            <img src={Logo} alt='logo'/>
            <div>
                <FormLogin setUser={setUser}/>
                <Link to={'/cadastro'} data-identifier="sign-up-action">Não tem uma conta? Cadastre-se!</Link>
            </div>
        </BodyStyle>
    )
};
