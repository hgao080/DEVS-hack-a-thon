import Header from "../Components/Header";
import MainPageFiller from "../Components/MainPageFiller";
import Nav from "../Components/Nav"
import Title from "../Components/Title"

const MainPage = () => {
  return (
    <div className="container">
      <Header />
      <Nav />
      <Title />
      <MainPageFiller />
    </div>
   );
}
 
export default MainPage;