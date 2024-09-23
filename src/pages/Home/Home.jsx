import {useState} from "react";
import {Container} from "./Home.styled";
import Loader from "../../components/Loader/Loader";
import MainContent from "../../components/MainContent/MainContent";

const Home = () => {
  const [loading] = useState(false);

  return (
    <Container>
      {loading && <Loader/>}
      <MainContent/>
    </Container>
  );
}

export default Home;
