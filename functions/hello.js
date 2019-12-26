import dayjs from 'dayjs'

exports.handler = async () => {
  const date = dayjs().format()
  return {
    statusCode: 200,
    body: date
  }
}
