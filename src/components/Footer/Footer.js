import { Link } from "react-router-dom";
import { Foot, Text, Today } from "./styled";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import Context from "../Context/Context";


const Footer = () => {
    const { resLogin, setResLogin } = useContext(Context);
    const percent = Math.round(resLogin.doneHabits.length / resLogin.habits.length * 100);
    setResLogin({...resLogin, percent});


    return (
        <Foot data-test="menu">
            <Link data-test="habit-link" to="/habitos">
                <Text>Habitos</Text>
            </Link>
            <Link data-test="today-link" to="/hoje">
                <Today>
                    <CircularProgressbar
                        value={percent}
                        text={"Hoje"}
                        styles={buildStyles({
                            pathTransitionDuration: 0.5,
                            pathColor: "#FFFFFF",
                            textColor: "#FFFFFF",
                            trailColor: "#52B6FF",
                        })}
                    />
                </Today>
            </Link>
            <Link data-test="history-link" to="/historico">
                <Text>Histórico</Text>
            </Link>
        </Foot>
    );
}

export default Footer;