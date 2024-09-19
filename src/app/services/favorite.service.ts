import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favorites = new BehaviorSubject<any[]>([]);
  favorites$ = this.favorites.asObservable();

  addFavorite(book: any, notes: string, rating: number, tags: string[]) {
    const currentFavorites = this.favorites.getValue();
    this.favorites.next([...currentFavorites, { book, notes, rating, tags }]);
  }

  editFavorite(index: number, notes: string, rating: number, tags: string[]) {
    const currentFavorites = this.favorites.getValue();
    currentFavorites[index] = { ...currentFavorites[index], notes, rating, tags };
    this.favorites.next([...currentFavorites]);
  }

  filterByTag(tag: string) {
    const currentFavorites = this.favorites.getValue();
    return currentFavorites.filter(fav => fav.tags.includes(tag));
  }
}
