import axios from "axios";

export * from './routes'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
