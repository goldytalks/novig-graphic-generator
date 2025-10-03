import { useState, useRef } from 'react';
import type { MarketData } from './types/market';
import MarketForm from './components/MarketForm';
import GraphicPreview from './components/GraphicPreview';
import DownloadButton from './components/DownloadButton';

function App() {
  const previewRef = useRef<HTMLDivElement>(null);

  const [marketData, setMarketData] = useState<MarketData>({
    question: 'Will Aaron Judge hit 3 home runs this week?',
    option1: 'YES',
    option1Odds: '+250',
    option2: 'NO',
    option2Odds: '-300',
    playerName: 'Aaron Judge',
    playerLine: 'Judge o/u 2.5 HRs',
    category: 'MLB',
    sport: 'MLB',
    volumeTraded: '1,234,567.89',
    template: 'bold',
    aspectRatio: '1:1',
    showPlayerName: true,
    showPlayerImage: false,
    showVolume: true,
  });

  const handleDataChange = (updates: Partial<MarketData>) => {
    setMarketData((prev) => ({ ...prev, ...updates }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-2 tracking-tight">
            Novig Graphic Generator
          </h1>
          <p className="text-gray-600 font-medium">
            Create branded betting market graphics in seconds
          </p>
        </div>

        {/* Main Layout - Two Column: Controls LEFT (fixed 400px), Preview RIGHT (flex-1) */}
        <div className="grid grid-cols-[400px_1fr] gap-8 h-[calc(100vh-200px)]">
          {/* LEFT COLUMN - Controls (Fixed 400px, Scrollable) */}
          <div className="overflow-y-auto pr-4">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h2 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">
                ⚙️ Controls
              </h2>

              {/* Market Form */}
              <MarketForm data={marketData} onDataChange={handleDataChange} />

              <div className="mt-6">
                <DownloadButton elementRef={previewRef} />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Preview (Remaining Width, Centered) */}
          <div className="flex flex-col items-center justify-center">
            {/* Live Preview Badge */}
            <div className="mb-6">
              <span className="inline-block bg-sky-blue text-white px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg">
                Live Preview
              </span>
            </div>

            {/* Preview Container - Centered */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl p-8 border-2 border-sky-blue max-w-full">
              <div className="flex justify-center items-center">
                <div style={{ maxWidth: '100%' }}>
                  <GraphicPreview data={marketData} ref={previewRef} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p className="font-medium">
            Built for Novig • High-quality exports • Optimized for social media
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
