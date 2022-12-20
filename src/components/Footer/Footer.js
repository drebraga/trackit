import { Link } from "react-router-dom";
import { Foot, Text, Today } from "./styled";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import Context from "../Context/Context";


const Footer = () => {
    const { resLogin } = useContext(Context);
    const percent = Math.round(resLogin.doneHabits.length / resLogin.habits.length * 100);
    console.log(resLogin.doneHabits)

    return (
        <Foot>
            <Link to="/habitos">
                <Text>Habitos</Text>
            </Link>
            <Link to="/hoje">
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
            <Link to="/historico">
                <Text>Histórico</Text>
            </Link>
        </Foot>
    );
}

export default Footer;