import { useState, useRef } from 'react';
import type { MarketData } from './types/market';
import TemplateSelector from './components/TemplateSelector';
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

        {/* Main Layout - Preview First, Form Below on mobile, Side by side on desktop */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          {/* Preview Section - Takes up more space */}
          <div className="xl:col-span-8 order-1">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex flex-col items-center">
                {/* Preview */}
                <div className="mb-6 w-full flex justify-center">
                  <div className="relative">
                    <GraphicPreview data={marketData} ref={previewRef} />
                    {/* Decorative badge */}
                    <div className="absolute -top-3 -right-3 bg-sky-blue text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      LIVE PREVIEW
                    </div>
                  </div>
                </div>

                {/* Download Button */}
                <DownloadButton elementRef={previewRef} />
              </div>
            </div>
          </div>

          {/* Controls Section - Compact sidebar */}
          <div className="xl:col-span-4 order-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Settings
              </h2>

              {/* Template Selector */}
              <TemplateSelector
                selectedTemplate={marketData.template}
                onTemplateChange={(template) =>
                  handleDataChange({ template })
                }
              />

              <div className="my-6 border-t-2 border-gray-100"></div>

              {/* Market Form */}
              <MarketForm data={marketData} onDataChange={handleDataChange} />
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
