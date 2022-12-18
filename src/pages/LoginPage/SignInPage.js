import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Login, Title, InputsLogin, Cadastro } from "./styled";
import { APIURL } from "../../constants/url";
import { ThreeDots } from "react-loader-spinner";
import logo from "../../assets/logo.png"

const SignInPage = () => {
    const navigate = useNavigate();
    const [loginStatus, setLoginStatus] = useState(false);
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
        setLoginStatus(true);
        axios.post(`${APIURL}/auth/sign-up`, signData)
            .then((res) => {
                setLoginStatus(false);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                alert(err.response.data.message);
                setLoginStatus(false);
            });
    }

    return (
        <Login>
            <img src={logo} alt="Logo do site" />
            <Title>TrackIt</Title>
            <InputsLogin onSubmit={sendRequest}>
                <input
                    placeholder="email"
                    type="email"
                    name="email"
                    value={signData.email}
                    onChange={handleInput}
                    disabled={loginStatus}
                    required
                />
                <input
                    placeholder="senha"
                    type="password"
                    name="password"
                    value={signData.password}
                    onChange={handleInput}
                    disabled={loginStatus}
                    required
                />
                <input
                    placeholder="nome"
                    type="text"
                    name="name"
                    value={signData.name}
                    onChange={handleInput}
                    disabled={loginStatus}
                    required
                />
                <input
                    placeholder="foto"
                    type="url"
                    name="image"
                    value={signData.image}
                    onChange={handleInput}
                    disabled={loginStatus}
                    required
                />
                <button disabled={loginStatus} type="submit">
                    {(!loginStatus) ? "Cadastrar" :
                        <ThreeDots
                            height="45"
                            width="45"
                            radius="9"
                            color="#FFFFFF"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />}
                </button>
            </InputsLogin>
            <Link to="/">
                <Cadastro>Já tem uma conta? Faça login!</Cadastro>
            </Link>
        </Login>
    );
}

export default SignInPage;