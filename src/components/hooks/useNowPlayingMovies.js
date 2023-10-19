import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../../utils/moviesSlice";

const useNowPlayingMovies = () => {
  //Fetch data from TMDB API
  const dispatch = useDispatch();

  const getNowPlayinMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    getNowPlayinMovies();
  }, []);
};

export default useNowPlayingMovies;
