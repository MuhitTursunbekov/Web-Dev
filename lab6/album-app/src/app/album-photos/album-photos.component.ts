import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Location, NgFor } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  imports: [NgFor],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css',
})
export class AlbumPhotosComponent implements OnInit {
  photos: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private albumsService: AlbumsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      let id = Number(params.get('id'));
      this.albumsService.getPhotos(id).subscribe((photos) => {
        this.photos = photos;
      });
    });
  }

  goBack() {
    this.location.back();
  }
}
