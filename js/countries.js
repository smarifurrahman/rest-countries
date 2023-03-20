const loadCountries = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    displayCountries(data);
}

const displayCountries = countries => {
    const countriesHTML = countries.map(country => getCountryHTML(country));
    const countriesContainer = document.getElementById('countries');
    countriesContainer.innerHTML = countriesHTML.join(' ');
}

// option 2
const getCountryHTML = ({name, flags, capital}) => {
    return `
    <div class="country">
        <h3>${name.common}</h3>
        <img src="${flags.png}">
        <h3>Capital: ${capital ? capital : 'Not Found'}</h3>
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