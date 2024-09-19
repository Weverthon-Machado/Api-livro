import { Component } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  favorites$ = this.favoriteService.favorites$;

  constructor(private favoriteService: FavoriteService) {}

  editFavorite(index: number, notes: string, rating: number, tags: string[]) {
    this.favoriteService.editFavorite(index, notes, rating, tags);
  }

  filterFavorites(tag: string) {
    this.favorites$ = this.favoriteService.filterByTag(tag);
  }
}
