import type { SportType } from '../types/market';

export function getSportEmoji(sport?: SportType): string {
  switch (sport) {
    case 'MLB':
      return '⚾';
    case 'NBA':
      return '🏀';
    case 'NFL':
      return '🏈';
    case 'NHL':
      return '🏒';
    case 'SOCCER':
      return '⚽';
    case 'FUTURES':
      return '🔮';
    default:
      return '📊';
  }
}

export function getSportName(sport?: SportType): string {
  return sport || 'OTHER';
}
