import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../services/album';
import { Album } from '../models/album';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './album-detail.html',  // Исправлено: .component.html
  styleUrls: ['./album-detail.css']    // Добавлено
})
export class AlbumDetailComponent implements OnInit {  // Исправлено: AlbumDetailComponent
  album: Album | null = null;
  loading = true;
  editedTitle = '';

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private router: Router  // Добавлено, если используется
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.loading = true;
      
      this.albumService.getAlbum(id).subscribe({
        next: (data) => {
          this.album = data;
          this.editedTitle = data.title;
          this.loading = false;
        },
        error: () => this.loading = false
      });
    });
  }

  saveTitle() {
    if (this.album) {
      const updated = { ...this.album, title: this.editedTitle };
      this.albumService.updateAlbum(updated).subscribe({
        next: (data) => {
          this.album = data;
          alert('Сохранено!');
        },
        error: (error) => {
          console.error('Ошибка:', error);
          alert('Ошибка при сохранении');
        }
      });
    }
  }
}