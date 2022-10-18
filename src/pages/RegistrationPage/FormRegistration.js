import { FormStyle } from "../../constants/styles"

export default function FormRegistration() {
    return (
        <FormStyle>
            <label for="">
                <input type="email" placeholder="email"/>
            </label>
            <label for="">
                <input type="password" placeholder="senha"/>
            </label>
            <label for="">
                <input type="text"  placeholder="nome"/>
            </label>
            <label for="">
                <input type="text"  placeholder="foto"/>
            </label>
            <label for="">
                <input type="submit" value="Cadastrar" />
            </label>
        </FormStyle>
    )
}