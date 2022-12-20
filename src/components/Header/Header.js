import { Link } from "react-router-dom";
import { Head, Title, Image } from "./styled";
import Context from "../Context/Context";
import { useContext } from "react";

const Header = () => {
    const { resLogin } = useContext(Context);
    return (
        <Head data-test="header">
            <Link to="/">
                <Title>
                    TrackIt
                </Title>
            </Link>
            <Image src={resLogin.image} alt="Imagem perfil" />
        </Head>
    );
}

export default Header;