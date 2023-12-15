import axios from "axios";
import { baseUrl } from "./contants";
const instance = axios.create({baseURL:baseUrl})

export default instance;