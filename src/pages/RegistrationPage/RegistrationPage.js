import { BodyStyle } from "../../constants/styles";
import Logo from "../../assets/images/logo.svg";
import FormRegistration from "./FormRegistration";
import { Link } from "react-router-dom";

export default function RegistrationPage() {
    return (
        <BodyStyle>
            <img src={Logo} alt='logo'/>
            <div>
                <FormRegistration />
                <Link to={"/"} data-identifier="back-to-login-action">Já tem uma conta? Faça login!</Link>
            </div>
        </BodyStyle>
    )
};