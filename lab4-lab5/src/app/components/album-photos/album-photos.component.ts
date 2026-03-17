
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Photo } from '../../models/photo.model';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  album: Album | null = null;
  albumId!: number;
  loading = false;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      if (id) {
        this.albumId = id;
        this.loadAlbumData(id);
      } else {
        this.router.navigate(['/albums']);
      }
    });
  }

  loadAlbumData(id: number): void {
    this.loading = false;
    this.error = null;

    this.albumService.getAlbum(id).subscribe({
      next: (album) => {
        this.album = album;
        this.loading = false;
      },
      error: (err) => console.error('Ошибка при загрузке данных альбома', err)
    });

    this.albumService.getAlbumPhotos(id).subscribe({
      next: (photos) => {
        this.photos = photos;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Ошибка загрузки фотографий.';
        this.loading = false;
        console.error('Error loading photos:', error);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }

  goToAlbums(): void {
    this.router.navigate(['/albums']);
  }
}
