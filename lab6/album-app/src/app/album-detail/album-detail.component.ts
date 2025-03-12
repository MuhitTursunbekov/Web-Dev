import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Location, NgIf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  imports: [RouterLink, NgIf, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css',
})
export class AlbumDetailComponent implements OnInit {
  album: any;
  newTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private albumsService: AlbumsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      let id = Number(params.get('id'));
      this.albumsService.getAlbum(id).subscribe((album) => {
        this.album = album;
      });
    });
  }

  goBack() {
    this.location.back();
  }

  updateAlbum() {
    if (this.newTitle === '') return;

    this.albumsService
      .updateAlbum(this.album.id, {
        userId: this.album.userId,
        id: this.album.id,
        title: this.newTitle,
      })
      .subscribe((album) => {
        this.album = album;
      });
  }
}
