const axios = require("axios")

exports.handler = async function (event) {
  console.log(event);
  const payload = JSON.parse(event.body)
  const { title, type, year, page, id } = payload
  const OMDb_API_KEY = '7035C60C'
  const url = id 
    ? `https://www.omdbapi.com/?apikey=${OMDb_API_KEY}&i=${id}`
    : `https://www.omdbapi.com/?apikey=${OMDb_API_KEY}&S=${title}&type=${type}&y=${year}&page=${page}`
  
  try {
    const { data } =  await axios.get(url)
    if(data.Error) {
      return {
        statusCode: 400,
        body: data.Error
      }
    }
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  }catch (err) {
    return {
      statusCode: err.response.status,
      body: err.message
    }
  }
};
