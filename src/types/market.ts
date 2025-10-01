export type TemplateType = 'bold' | 'minimal' | 'gradient';
export type AspectRatio = '1:1' | '1.91:1';
export type SportType = 'MLB' | 'NBA' | 'NFL' | 'NHL' | 'SOCCER' | 'FUTURES' | 'OTHER';

export interface MarketData {
  // Required fields
  question: string;
  option1: string;
  option1Odds: string;
  option2: string;
  option2Odds: string;

  // Optional fields
  playerName?: string;
  playerLine?: string; // e.g., "Judge o/u 2.5 HRs"
  playerImage?: string;
  category?: string;
  sport?: SportType;
  volumeTraded?: string;

  // Display settings
  template: TemplateType;
  aspectRatio: AspectRatio;

  // Toggle visibility settings
  showPlayerName: boolean;
  showPlayerImage: boolean;
  showVolume: boolean;
}

export interface TemplateProps {
  data: MarketData;
  width: number;
  height: number;
}
