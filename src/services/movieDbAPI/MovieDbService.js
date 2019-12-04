import axios from 'axios';
import {
    getPopularMoviesRequest,
    APIkey,
    getMovieRequest,
    getCastRequest,
    searchMovieRequest,
    query,
} from '../../services/movieDbAPI/movieDb';

class MovieDbService {
    getData(type, id) {
        let request;
        switch (type) {
            case 'movie':
                request = getMovieRequest + id + APIkey;
                break;
            case 'movies':
                request = getPopularMoviesRequest;
                break;
            case 'cast':
                request = getMovieRequest + id + getCastRequest + APIkey;
                break;
            case 'searchMovie':
                request = searchMovieRequest + APIkey + query + id;
                break;
        }
        const result = axios
            .get(request)
            .then(res => {
                return res.data;
            });
        return result;
    }
}
export default new MovieDbService();