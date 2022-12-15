import { ThreeDots } from "react-loader-spinner";
import { Load } from "./styled";

const PageLoad = () => {
    return (
        <Load>
            <ThreeDots
                height="50"
                width="50"
                color="#126BA5"
                ariaLabel="three-dots-loading"
                radius="9"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </Load>
    );
}

export default PageLoad;