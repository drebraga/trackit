import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { APIURL } from "../../constants/url";
import { Login, Title, InputsLogin, Cadastro } from "./styled";
import logo from "../../assets/logo.png"
import Context from "../../components/Context/Context";

const LoginPage = () => {
    const { resLogin, setResLogin } = useContext(Context);
    const navigate = useNavigate();
    const [loginStatus, setLoginStatus] = useState(false);
    const [loginData, setLoginData] = useState({
        password: "",
        email: ""
    });

    useEffect(() => {
        if (resLogin !== null) {
            axios.get(`${APIURL}/habits/today`, {
                headers: { Authorization: `Bearer ${resLogin.token}` }
            })
                .then((res) => {
                    const habits = res.data;
                    const max = res.data.length;
                    const doneHabits = res.data.filter(e => e.done === true);
                    setResLogin({ ...resLogin, max, habits, doneHabits });
                })
                .catch((err) => console.log(err.response.data.message));
            navigate("/hoje")
        }
    }, [])

    function handleInput(e) {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }

    function sendRequest(e) {
        e.preventDefault();
        setLoginStatus(true);
        axios.post(`${APIURL}/auth/login`, loginData)
            .then((res) => {
                setLoginStatus(false);
                setResLogin(res.data);
                localStorage.setItem("user", JSON.stringify(res.data));
                navigate("/hoje");
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
                    value={loginData.email}
                    onChange={handleInput}
                    disabled={loginStatus}
                    required
                />
                <input
                    placeholder="senha"
                    type="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleInput}
                    disabled={loginStatus}
                    required
                />
                <button disabled={loginStatus} type="submit">
                    {(!loginStatus) ? "Entrar" :
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
            <Link to="/cadastro">
                <Cadastro>Não tem uma conta? Cadastre-se!</Cadastro>
            </Link>
        </Login>
    );
}

export default LoginPage;