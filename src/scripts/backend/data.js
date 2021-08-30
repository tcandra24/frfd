import axios from 'axios'

const baseUrl = 'https://www.themealdb.com/api/json/v1/1'

class Data {
  static getData (url) {
    return axios.get(`${baseUrl}/${url}`)
      .then(response => {
        if (response) {
          if (response.status === 200) {
            return Promise.resolve(response)
          } else {
            return Promise.reject(new Error('Terdapat Masalah Pada Koneksi'))
          }
        } else {
          return Promise.reject(new Error('Error Mendapatkan Data'))
        }
      })
  }
}

export default Data
