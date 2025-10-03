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

        {/* Main Layout - Side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-6 items-start">
          {/* Controls Section - Left Side */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-gray-200">
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

          {/* Preview Section - Right Side */}
          <div className="order-1 lg:order-2">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl p-8 border-2 border-sky-blue sticky top-8">
              <div className="mb-6 text-center">
                <span className="inline-block bg-sky-blue text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                  Live Preview
                </span>
              </div>

              <div className="flex justify-center">
                <GraphicPreview data={marketData} ref={previewRef} />
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
