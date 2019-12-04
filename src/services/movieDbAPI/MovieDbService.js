import axios from 'axios';
import movieDbRequests from './movieDbconfig'
import Mustache from 'mustache'

class MovieDbService {
    getData(type, id) {
        let request;
        switch (type) {
            case 'movie':
                request = Mustache.render("{{{getMovieRequest}}}" + id + "?api_key={{APIkey}}", movieDbRequests);
                break;
            case 'movies':
                request = Mustache.render("{{{getPopularMoviesRequest}}}&api_key={{APIkey}}", movieDbRequests);
                break;
            case 'cast':
                request = Mustache.render("{{{getMovieRequest}}}" + id + "{{{getCastRequest}}}?api_key={{APIkey}}", movieDbRequests);
                break;
            case 'searchMovie':
                request = Mustache.render("{{{searchMovieRequest}}}?api_key={{APIkey}}&query=" + id, movieDbRequests);
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