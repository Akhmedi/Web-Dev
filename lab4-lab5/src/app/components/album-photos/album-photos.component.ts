// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Router, ActivatedRoute } from '@angular/router';
// import { AlbumService } from '../../services/album.service';
// import { Photo } from '../../models/photo.model';
// import { Album } from '../../models/album.model';
//
// @Component({
//   selector: 'app-album-photos',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './album-photos.component.html',
//   styleUrls: ['./album-photos.component.css']
// })
// export class AlbumPhotosComponent implements OnInit {
//   photos: Photo[] = [];
//   album: Album | null = null;
//   albumId!: number;
//   loading = true;
//   error: string | null = null;
//
//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private albumService: AlbumService
//   ) {}
//
//   ngOnInit(): void {
//     this.route.params.subscribe(params => {
//       const id = Number(params['id']);
//       if (id) {
//         this.albumId = id;
//         this.loadAlbumAndPhotos(id);
//       } else {
//         this.router.navigate(['/albums']);
//       }
//     });
//   }
//
//   loadAlbumAndPhotos(id: number): void {
//     this.loading = true;
//     this.error = null;
//
//     // Загружаем информацию об альбоме и фотографии параллельно
//     Promise.all([
//       this.albumService.getAlbum(id).toPromise(),
//       this.albumService.getAlbumPhotos(id).toPromise()
//     ]).then(([album, photos]) => {
//       this.album = album || null;
//       this.photos = photos || [];
//       this.loading = false;
//     }).catch(error => {
//       this.error = 'Ошибка загрузки фотографий. Возможно, альбом не существует.';
//       this.loading = false;
//       console.error('Error loading album photos:', error);
//     });
//   }
//
//   goBack(): void {
//     this.router.navigate(['/albums', this.albumId]);
//   }
//
//   goToAlbums(): void {
//     this.router.navigate(['/albums']);
//   }
// }

// src/app/components/album-photos/album-photos.component.ts

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
  loading = true;
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
    this.loading = true;
    this.error = null;

    this.albumService.getAlbum(id).subscribe({
      next: (album) => {
        this.album = album;
        this.loading = true;
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
