import {useEffect, useState} from "react";
import {getTrending} from "../../services";
import {MoviesList} from "../../components/MoviesList/MoviesList";
import {Container, Title} from "./Home.styled";
import Loader from "../../components/Loader/Loader";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getTrending();
        setMovies(response.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      {loading && <Loader/>}
      <Title>Trending Movies</Title>
      <MoviesList movies={movies}/>
    </Container>
  );
}

export default Home;
