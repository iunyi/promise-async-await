// get country where alpha3Code = col

const fetchData = async() => {
    let response = await fetch('https://restcountries.eu/rest/v2/alpha/col');
    let country = await response.json();
    console.log(country);
};

fetchData();