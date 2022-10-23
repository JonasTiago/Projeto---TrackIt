import { BodyStyle } from "../../constants/styles";
import Logo from "../../assets/images/logo.svg";
import FormRegistration from "./FormRegistration";
import { Link } from "react-router-dom";

export default function RegistrationPage() {

    console.log('regist');
    
    return (
        <BodyStyle>
            <img src={Logo} />
            <div>
                <FormRegistration />
                <Link to={"/"}>Já tem uma conta? Faça login!</Link>
            </div>
        </BodyStyle>
    )
};