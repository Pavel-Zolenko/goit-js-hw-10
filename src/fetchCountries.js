import Notiflix from 'notiflix';
const BASE_URL = 'https://restcountries.com/v2/name/';

export default function fetchCountries(name) {
    return fetch(`${BASE_URL}${name}?fields=name,capital,currencies,population,languages,flags`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }
            return resp.json()
        }
    )
        .catch(err => {
            Notiflix.Notify.failure('Oops, there is no country with that name');
            console.error(err)
        } );        
}
 