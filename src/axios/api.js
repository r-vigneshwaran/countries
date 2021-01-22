import axios from 'axios';


const fetchCountries = async (ref, query) => {
    const source = axios.CancelToken.source();
    if (ref === 'fullname') {
        console.log('i m here');
        console.log(`https://restcountries.eu/rest/v2/name/${query}?fullText=true`);
        const { data } = await axios.get(`https://restcountries.eu/rest/v2/name/${query}?fullText=true`, {
            cancelToken: source.token,
        });
        return data;
    }
    else {
        const { data } = await axios.get(`https://restcountries.eu/rest/v2/${ref}/${query}`, {
            cancelToken: source.token,
        });
        return data;
    }
}

export default fetchCountries;