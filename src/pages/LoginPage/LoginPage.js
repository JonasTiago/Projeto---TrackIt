import { useContext } from "react"
import { Link } from "react-router-dom"
import Logo from "../../assets/images/logo.svg"
import { BodyStyle } from "../../constants/styles"
import { UserAuthContext } from "../../constants/userAuth"
import FormLogin from "./FormLogin"

export default function LoginPage() {
    const { setUser } = useContext(UserAuthContext) 

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
