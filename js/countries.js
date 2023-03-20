const loadCountries = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    displayCountries(data);
}

const displayCountries = countries => {
    console.log(countries[0])
    const countriesHTML = countries.map(country => getCountryHTML(country));
    const countriesContainer = document.getElementById('countries');
    countriesContainer.innerHTML = countriesHTML.join(' ');
}

// option 2
const getCountryHTML = ({name, flags, capital, area, population, region}) => {
    return `
    <div class="country">
        <h3>${name.common}</h3>
        <img src="${flags.png}">
        <div>
            <p>Capital: ${capital ? capital : 'Not Found'}</p>
            <p>Area: ${area ? area : 'Not Found'}</p>
            <p>Population: ${population ? population : 'Not Found'}</p>
            <p>Region: ${region ? region : 'Not Found'}</p>
        </div>
    </div>
    `;
}

// // option 1
// const getCountryHTML = country => {
//     const {name, flags, capital} = country;
//     return `
//     <div class="country">
//         <h3>${name.common}</h3>
//         <img src="${flags.png}">
//         <h3>Capital: ${capital ? capital : 'Not Found'}</h3>
//     </div>
//     `;
// }

// // original
// const getCountryHTML = country => {
//     return `
//     <div class="country">
//         <h3>${country.name.common}</h3>
//         <img src="${country.flags.png}">
//         <h3>Capital: ${country.capital ? country.capital : 'Not Found'}</h3>
//     </div>
//     `;
// }

loadCountries();