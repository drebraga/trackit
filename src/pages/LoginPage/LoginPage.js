import { Link } from "react-router-dom";
import { Login, Title, InputsLogin, Cadastro } from "./styled";

const LoginPage = () => {
    return (
        <Login>
            <Title>TrackIt</Title>
            <InputsLogin onSubmit={() => alert("Logando")}>
                <input placeholder="email" type="email" required />
                <input placeholder="senha" type="password" required />
                <button type="submit">Entrar</button>
            </InputsLogin>
            <Link to="/cadastro">
                <Cadastro>Não tem uma conta? Cadastre-se!</Cadastro>
            </Link>
        </Login>
    );
}

export default LoginPage;

