import React, {useState, useEffect, useRef} from 'react';
import {Pagination} from 'antd';
import {getPlants} from '../services';
import {SearchBox} from '../components/SearchBox/SearchBox';
import {PlantsList} from '../components/PlantsList/PlantsList';
import {useSearchParams} from "react-router-dom";
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";

const PLANTS_PER_PAGE = 20;

const Plants = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const prevPlantNameRef = useRef('');
  const prevPageRef = useRef(1);

  const plantName = searchParams.get('query') || '';

  useEffect(() => {
    if (plantName === prevPlantNameRef.current && page === prevPageRef.current) {
      return;
    }

    prevPlantNameRef.current = plantName;
    prevPageRef.current = page;

    const fetchPlants = async () => {
      setLoading(true);

      try {
        const response = await getPlants(plantName, page);
        setPlants(response.results);
      } catch (err) {
        setError('Failed to fetch plants. Please try again later.');
        console.error("Error fetching plants:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlants();
  }, [plantName, page]);

  const handleSearchSubmit = (value) => {
    if (value !== prevPlantNameRef.current) {
      setSearchParams({query: value});
      setPage(1);
      setPlants([]);
    }
  };

  const handlePageChange = (page) => {
    setPage(page);
  };

  if (error) {
    return <Error errorDetails={error}/>;
  }

  return (
    <div>
      {loading && <Loader/>}
      <SearchBox onSubmit={handleSearchSubmit}/>
      <PlantsList plants={plants}/>
      {plantName && plants.length > 0 && (
        <Pagination
          current={page}
          pageSize={PLANTS_PER_PAGE}
          total={totalPages * PLANTS_PER_PAGE}
          onChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default Plants;
