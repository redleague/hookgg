import { version } from '../../package.json';
import { baseURL } from './Constants';
import axios from 'axios';

export function createClient() {
  return axios.create({
    baseURL: baseURL,
    headers: {
      'User-Agent': `Hook.gg HTTP Handler (version: ${version})`,
      'Content-Type': 'application/json',
    }
  });
}

