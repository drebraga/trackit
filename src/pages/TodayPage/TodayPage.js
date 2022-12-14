import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HabitCard from "../../components/Today/HabitCard";
import { NOHABITSTODAY } from "../../constants/Textos";
import { Text, Title, Today } from "./styled";

const TodayPage = () => {
    return (
        <Today>
            <Header />
            <Footer />
            <Title>Segunda, 17/05</Title>
            <Text>{NOHABITSTODAY}</Text>
            <HabitCard />
            <HabitCard />
            <HabitCard />
        </Today>
    );
}

export default TodayPage;