const getAPI = async () => {
  const checkpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  try {
    const result = await fetch(checkpoint);
    const planetResult = await result.json();
    return planetResult;
  } catch (error) {
    console.log(error);
  }
};

export default getAPI;
