import axios from 'axios';
import  movieDbConf from './movieDbconfig'

class MovieDbService {
    getData(type, id) {
        let request;
        switch (type) {
            case 'movie':
                request = `${movieDbConf.getMovieRequest}${id}?api_key=${movieDbConf.APIkey}`;
                break;
            case 'movies':
                request = `${movieDbConf.getPopularMoviesRequest}&api_key=${movieDbConf.APIkey}`;
                break;
            case 'cast':
                request = `${movieDbConf.getMovieRequest}${id}/${movieDbConf.getCastRequest}?api_key=${movieDbConf.APIkey}`;
                break;
            case 'searchMovie':
                request = `${movieDbConf.searchMovieRequest}?api_key=${movieDbConf.APIkey}&query=${id}`;
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