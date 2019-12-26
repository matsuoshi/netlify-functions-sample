import dayjs from 'dayjs'
import axios from 'axios'

exports.handler = async () => {
  const response = await axios.get('https://httpbin.org/get', {
  	params: {
   	  date: dayjs().format()
  	}
  });

  return {
    statusCode: 200,
    body: JSON.stringify(response.data.args)
  }
}
