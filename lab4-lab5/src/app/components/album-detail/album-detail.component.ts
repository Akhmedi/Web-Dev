import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editedTitle = '';
  loading = true;
  saving = false;
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
        this.loadAlbum(id);
      } else {
        this.router.navigate(['/albums']);
      }
    });
  }

  loadAlbum(id: number): void {
    this.loading = true;
    this.error = null;

    this.albumService.getAlbum(id).subscribe({
      next: (album) => {
        this.album = album;
        this.editedTitle = album.title;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Ошибка загрузки альбома. Возможно, альбом не существует.';
        this.loading = false;
        console.error('Error loading album:', error);
      }
    });
  }

  saveAlbum(): void {
    if (!this.album || !this.editedTitle.trim()) return;

    this.saving = true;
    const updatedAlbum: Album = {
      ...this.album,
      title: this.editedTitle.trim()
    };

    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: (album) => {
        this.album = album;
        this.saving = false;
      },
      error: (error) => {
        console.error('Error updating album:', error);
        alert('Ошибка при сохранении альбома');
        this.saving = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
