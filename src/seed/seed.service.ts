import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;
  async fillBd() {
    const { data } = await this.axios.get(
      'https://pokeapi.co/api/v2/pokemon/?limit=650',
    );
    return data;
  }
}
