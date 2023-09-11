import axios from "axios";

export * from './routes'

const BASE_URL = 'https://api.sciepro.sheep.fish/api';
axios.defaults.baseURL = BASE_URL;
