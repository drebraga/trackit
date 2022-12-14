import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { NOHABITSHISTORY } from "../../constants/Textos";
import { Text, Title, History } from "./styled";

const HistoryPage = () => {
    return (
        <History>
            <Header />
            <Footer />
            <Title>Histórico</Title>
            <Text>{NOHABITSHISTORY}</Text>
        </History>

    );
}

export default HistoryPage;