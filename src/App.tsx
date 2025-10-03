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
      <div className="h-screen flex flex-col">
        {/* Header */}
        <div className="text-center py-6 bg-white border-b border-gray-200">
          <h1 className="text-4xl font-bold text-gray-900 mb-1 tracking-tight">
            Novig Graphic Generator
          </h1>
          <p className="text-gray-600 font-medium text-sm">
            Create branded betting market graphics in seconds
          </p>
        </div>

        {/* Main Layout - Two Column: Controls LEFT, Preview RIGHT */}
        <div className="flex-1 grid grid-cols-2 overflow-hidden">
          {/* LEFT COLUMN - Controls (50%, Scrollable) */}
          <div className="overflow-y-auto bg-gray-50 border-r border-gray-200 p-6">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
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

          {/* RIGHT COLUMN - Preview (50%, Centered) */}
          <div className="overflow-y-auto bg-white flex flex-col items-center justify-center p-8">
            {/* Live Preview Badge */}
            <div className="mb-6">
              <span className="inline-block bg-sky-blue text-white px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg">
                Live Preview
              </span>
            </div>

            {/* Preview Container - Centered */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl p-6 border-2 border-sky-blue">
              <div className="flex justify-center items-center">
                <GraphicPreview data={marketData} ref={previewRef} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
