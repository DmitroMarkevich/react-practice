import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getCast} from "../../services";
import Loader from "../Loader/Loader";
import CastsList from "./List/CastsList";
import Error from "../Error/Error";
import {NoCastInfo, Title} from "./Cast.styled";
import {Pagination} from "antd";

const CASTS_PER_PAGE = 7;

const Cast = () => {
  const {movieId} = useParams();
  const [casts, setCasts] = useState([]);
  const [displayedCasts, setDisplayedCasts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchCast = async () => {
      setLoading(true);
      try {
        const response = await getCast(Number(movieId));
        const castData = response.cast;
        setCasts(castData);
        setDisplayedCasts(castData.slice(0, CASTS_PER_PAGE));
      } catch (error) {
        setError('Failed to load cast information.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  useEffect(() => {
    const start = (page - 1) * CASTS_PER_PAGE;
    const end = start + CASTS_PER_PAGE;
    setDisplayedCasts(casts.slice(start, end));
  }, [page, casts]);

  const handlePageChange = (page) => {
    setPage(page);
  };

  if (error) {
    return <Error errorDetails={error}/>;
  }

  return (
    <div>
      {loading && <Loader/>}
      <Title>Cast Information</Title>
      <CastsList casts={displayedCasts}/>

      {casts.length > 0 ? (
        <Pagination
          current={page}
          pageSize={CASTS_PER_PAGE}
          total={casts.length}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      ) : (
        <NoCastInfo>No cast information available.</NoCastInfo>
      )}
    </div>
  );
};

export default Cast;
