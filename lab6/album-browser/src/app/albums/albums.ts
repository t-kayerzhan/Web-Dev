import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AlbumService } from '../services/album';  // Исправлено: добавил .service
import { Album } from '../models/album';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.html',  // Исправлено: .component.html
  styleUrls: ['./albums.css']     // Исправлено: .component.css
})
export class AlbumsComponent implements OnInit {  // Исправлено: AlbumsComponent
  albums: Album[] = [];
  loading = true;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
      },
      error: () => this.loading = false
    });
  }

  deleteAlbum(id: number, event: Event) {
    event.stopPropagation();
    if (confirm('Удалить альбом?')) {
      this.albumService.deleteAlbum(id).subscribe({
        next: () => {
          this.albums = this.albums.filter(a => a.id !== id);
        }
      });
    }
  }
}