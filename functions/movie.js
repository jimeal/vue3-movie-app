const axios = require("axios")
const OMDb_API_KEY = process.env.OMDb_API_KEY

exports.handler = async function (event) {
  console.log(event);
  const payload = JSON.parse(event.body)
  const { title, type, year, page, id } = payload
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
