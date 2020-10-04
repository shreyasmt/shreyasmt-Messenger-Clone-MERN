import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://messengermern.herokuapp.com/'
}
)
export default instance