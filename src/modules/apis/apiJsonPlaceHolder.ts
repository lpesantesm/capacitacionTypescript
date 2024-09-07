import axios from "axios"
import { API_JSONPLACEHOLDER } from "../../env/environments"

const apiJsonPlaceholder = axios.create({
    baseURL: API_JSONPLACEHOLDER
    
})

export default apiJsonPlaceholder