import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;
  error: string | null = null;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.loading = true;
    this.error = null;

    this.albumService.getAlbums().subscribe({
      next: (albums) => {
        this.albums = albums;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Ошибка загрузки альбомов. Попробуйте позже.';
        this.loading = false;
        console.error('Error loading albums:', error);
      }
    });
  }

  deleteAlbum(id: number, event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    if (confirm('Вы уверены, что хотите удалить этот альбом?')) {
      this.albumService.deleteAlbum(id).subscribe({
        next: () => {
          this.albums = this.albums.filter(album => album.id !== id);
        },
        error: (error) => {
          console.error('Error deleting album:', error);
          alert('Ошибка при удалении альбома');
        }
      });
    }
  }
}
