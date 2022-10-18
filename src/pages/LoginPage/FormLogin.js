import { FormStyle } from "../../constants/styles"

export default function FormLogin() {
    return (
        <FormStyle>
            <label for="">
                <input type="text" placeholder="email"/>
            </label>
            <label for="">
                <input type="password" placeholder="senha"/>
            </label>
            <label for="">
                <input type="submit" value="Entrar" />
            </label>
        </FormStyle>
    )
}