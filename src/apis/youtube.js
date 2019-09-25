import axios from 'axios';
const KEY = 'AIzaSyBsiig3LReXbNtUuRjctnZquB_Ih5NZP0M';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }

});