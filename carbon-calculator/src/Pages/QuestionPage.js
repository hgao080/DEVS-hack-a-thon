import QuestionPageStyle from "../ComponentStyles/QuestionPage.module.css";
import QuestionSlider from "../Components/QuestionSlider";
import Sidebar from "../Components/Sidebar"

export default function QuestionPage() {

    return (
        <div className={QuestionPageStyle.container}>
            <div className={QuestionPageStyle.sidebar}>
                <Sidebar/>
            </div>
            <QuestionSlider/>
        </div>
    )
}