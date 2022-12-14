import { Link } from "react-router-dom";
import { Foot, Text, Today } from "./styled";

const Footer = () => {
    return (
        <Foot>
            <Link to="/habitos">
                <Text>Habitos</Text>
            </Link>
            <Link to="/hoje">
                <Today type="button" value="Hoje" />
            </Link>
            <Link to="/historico">
                <Text>Histórico</Text>
            </Link>
        </Foot>
    );
}

export default Footer;