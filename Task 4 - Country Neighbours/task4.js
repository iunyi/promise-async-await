// Neighbour countries of Colombia

const findNeighbourCountries = async (threeLetterCountryCode) => {
  const country = await fetchCountry(threeLetterCountryCode);

  const neighbours = await Promise.all(country.borders.map(neighbour => fetchCountry(neighbour)));

  console.log(neighbours)
}

const fetchCountry = async (threeLetterCountryCode) =>  {
  try {
    const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${threeLetterCountryCode}`);

    const country = await response.json();

    return country
    
  } catch (error) {
    console.log(error)
  }
}

findNeighbourCountries('col');