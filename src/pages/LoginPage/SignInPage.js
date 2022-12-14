import { Link } from "react-router-dom";
import { Login, Title, InputsLogin, Cadastro } from "./styled";

const SignInPage = () => {
    return (
        <Login>
            <Title>TrackIt</Title>
            <InputsLogin onSubmit={() => alert("Logando")}>
                <input placeholder="email" type="email" required />
                <input placeholder="senha" type="password" required />
                <input placeholder="nome" type="text" required />
                <input placeholder="foto" type="url" required />
                <button type="submit">Cadastrar</button>
            </InputsLogin>
            <Link to="/">
                <Cadastro>Já tem uma conta? Faça login!</Cadastro>
            </Link>
        </Login>
    );
}

export default SignInPage;