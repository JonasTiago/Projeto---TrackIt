import { Link } from "react-router-dom"
import Logo from "../../assets/images/logo.svg"
import { BodyStyle } from "../../constants/styles"
import FormLogin from "./FormLogin"

export default function LoginPage() {
    return (
        <BodyStyle>
            <img src={Logo} />
            <FormLogin />
            <Link to={'/cadastro'} >Não tem uma conta? Cadastre-se!</Link>
        </BodyStyle>
    )
};
