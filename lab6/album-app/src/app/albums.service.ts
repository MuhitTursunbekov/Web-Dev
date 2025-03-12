import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  constructor(private client: HttpClient) {}

  getAlbums() {
    return this.client.get('https://jsonplaceholder.typicode.com/albums');
  }

  getAlbum(id: number) {
    return this.client.get(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  getPhotos(id: number) {
    return this.client.get(
      `https://jsonplaceholder.typicode.com/albums/${id}/photos`
    );
  }

  deleteAlbum(id: number) {
    return this.client.delete(
      `https://jsonplaceholder.typicode.com/albums/${id}`
    );
  }

  updateAlbum(id: number, data: any) {
    return this.client.put(
      `https://jsonplaceholder.typicode.com/albums/${id}`,
      data
    );
  }
}