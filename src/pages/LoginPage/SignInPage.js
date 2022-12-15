import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Login, Title, InputsLogin, Cadastro } from "./styled";
import { APIURL } from "../../constants/url";

const SignInPage = () => {
    const [signData, setSignData] = useState({
        email: "",
        name: "",
        image: "",
        password: ""
    });


    function handleInput(e) {
        setSignData({ ...signData, [e.target.name]: e.target.value });
    }

    function sendRequest(e) {
        e.preventDefault();
        axios.post(`${APIURL}/auth/sign-up`, signData)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err.response.data));
    }

    return (
        <Login>
            <Title>TrackIt</Title>
            <InputsLogin onSubmit={sendRequest}>
                <input
                    placeholder="email"
                    type="email"
                    name="email"
                    value={signData.email}
                    onChange={handleInput}
                    required
                />
                <input
                    placeholder="senha"
                    type="password"
                    name="password"
                    value={signData.password}
                    onChange={handleInput}
                    required
                />
                <input
                    placeholder="nome"
                    type="text"
                    name="name"
                    value={signData.name}
                    onChange={handleInput}
                    required
                />
                <input
                    placeholder="foto"
                    type="url"
                    name="image"
                    value={signData.image}
                    onChange={handleInput}
                    required
                />
                <button type="submit">Cadastrar</button>
            </InputsLogin>
            <Link to="/">
                <Cadastro>Já tem uma conta? Faça login!</Cadastro>
            </Link>
        </Login>
    );
}

export default SignInPage;