const express = require('express')
const axios = require('axios')

const app = express()
const { OMDB_API_KEY } = process.env;

// express.json() 이라는 메서드를 실행할때 나오는 플러그인을 등록해준다.
// 요청과 응답의 body부분을 해석할수있게 만들어주는 것이다.
app.use(express.json())

// post방식을 통해 어떠한 경로로 접근하게 되면 해당내용을 처리할지 작성!!
app.post('/', async (req, res) => {
  // express의 json이라는 메서드를 실행해서 플러그인을 등록했기 때문에
  // body형태를 JSON.parse로 안해줘도 된다. const payload = JSON.parse(req.body);
  const payload = req.body;
  const { title, type, year, page, id } = payload;

  console.log('OMDB_API_KEY: ', OMDB_API_KEY);
  console.log('params: ', payload);

  const url = id
    ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}&plot=full`
    : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`;

  try {
    const { data } = await axios.get(url);
    if (data.Error) {
     // 에러인경우 상태코드 400에 에러 데이터를 json으로 반환해줄수 있다
      res.status(400).json(data.Error);
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(error.response.status).json(error.message)
  }
})

module.exports = app