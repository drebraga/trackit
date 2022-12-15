import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Context from "../../components/Context/Context";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HabitCard from "../../components/Today/HabitCard";
import PageLoad from "../../components/PageLoad/PageLoad";
import { NOHABITSTODAY, WEEKDAY } from "../../constants/Textos";
import { APIURL } from "../../constants/url";
import { Text, Title, Today } from "./styled";

const TodayPage = () => {
    const { token } = useContext(Context);
    const [myTodayHabits, setMyTodayHabits] = useState(undefined);
    const date = new Date();
    const dia = date.getDay();

    useEffect(() => {
        setMyTodayHabits(undefined);
        axios.get(`${APIURL}/habits/today`, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((res) => setMyTodayHabits(res.data))
            .catch((err) => console.log(err.response.data.message))
    }, []);

    if (myTodayHabits === undefined) {
        return <PageLoad />
    }

    return (
        <Today>
            <Header />
            <Footer />
            <Title>{WEEKDAY[dia]}, {date.toLocaleDateString()}</Title>
            {myTodayHabits.length === 0 ?
                <Text>{NOHABITSTODAY}</Text>
                :
                myTodayHabits.map((e) =>
                    <HabitCard
                        key={e.id}
                        habit={e}
                    />
                )}
        </Today>
    );
}

export default TodayPage;