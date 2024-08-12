import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getReviews} from "../../services";
import {NoReviewInfo, Title, Wrapper} from "./Reviews.styled";
import ReviewsList from "./List/ReviewsList";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

const Reviews = () => {
  const {movieId} = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);
      try {
        const response = await getReviews(Number(movieId));
        setReviews(response.results);
      } catch (error) {
        setError('Failed to load cast information.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (error) {
    return <Error errorDetails={error}/>;
  }

  return (
    <div>
      {loading && <Loader/>}
      <Title>Reviews</Title>
      {reviews.length > 0 ? (
        <ReviewsList reviews={reviews}/>
      ) : (
        <NoReviewInfo>No reviews available</NoReviewInfo>
      )}
    </div>
  );
}

export default Reviews;
