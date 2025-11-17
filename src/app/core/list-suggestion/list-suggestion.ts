import { Component } from '@angular/core';

import { Suggestion } from '../../models/suggestion';

@Component({
  selector: 'app-list-suggestion',
  standalone: false,
  templateUrl: './list-suggestion.html',
  styleUrls: ['./list-suggestion.css'],
})
export class ListSuggestion {
  searchTerm: string = '';
  favorites: Suggestion[] = [];

  suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description:
        "Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l'équipe.",
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'acceptee',
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description:
        'Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.',
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'refusee',
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description:
        "Mise en place d'un programme de récompenses pour motiver les employés et reconnaître leurs efforts.",
      category: 'Ressources Humaines',
      date: new Date('2025-01-25'),
      status: 'refusee',
    },
    {
      id: 4,
      title: "Moderniser l'interface utilisateur",
      description:
        "Refonte complète de l'interface utilisateur pour une meilleure expérience utilisateur.",
      category: 'Technologie',
      date: new Date('2025-01-30'),
      status: 'en_attente',
    },
    {
      id: 5,
      title: 'Formation à la sécurité informatique',
      description:
        "Organisation d'une formation sur les bonnes pratiques de sécurite informatique pour tous les employés.",
      category: 'Formation',
      date: new Date('2025-02-05'),
      status: 'acceptee',
    },
  ];

  filteredSuggestions: Suggestion[] = this.suggestions;

  getStatusLabel(status: string): string {
    switch (status) {
      case 'acceptee':
        return 'Acceptée';
      case 'refusee':
        return 'Refusée';
      case 'en_attente':
        return 'En attente';
      default:
        return status;
    }
  }

  addToFavorites(s: Suggestion) {
    alert('Suggestion ajoutée aux favoris !');
  }

  filterSuggestions() {
    const term = this.searchTerm.toLowerCase();
    this.filteredSuggestions = this.suggestions.filter(
      (s) => s.title.toLowerCase().includes(term) || s.category.toLowerCase().includes(term)
    );
  }

  likesMap: Map<any, number> = new Map();
  likeCount: number = 0;
  addLike(s: any) {
    if (!this.likesMap.has(s)) {
      this.likesMap.set(s, 0);
    }
    this.likesMap.set(s, this.likesMap.get(s)! + 1);
  }

  getLikes(s: any): number {
    return this.likesMap.get(s) || 0;
  }
}
