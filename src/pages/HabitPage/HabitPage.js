import Footer from "../../components/Footer/Footer";
import Habits from "../../components/Habit/Habits/Habits";
import Header from "../../components/Header/Header";
import NewHabit from "../../components/Habit/NewHabit/NewHabit";
import { NOHABITS } from "../../constants/Textos";
import { Button, Habit, Text, Title } from "./styled";

const HabitPage = () => {
    return (
        <Habit>
            <Header />
            <Footer />
            <Title>Meus hábitos <Button type="button" value="+" /></Title>
            <NewHabit />
            <Text>
                {NOHABITS}
            </Text>
            <Habits />
            <Habits />
            <Habits />
            <Habits />
            <Habits />
        </Habit>
    );
}

export default HabitPage;