import type { MarketData } from '../types/market';
import { Upload, Eye, EyeOff } from 'lucide-react';

interface MarketFormProps {
  data: MarketData;
  onDataChange: (data: Partial<MarketData>) => void;
}

export default function MarketForm({ data, onDataChange }: MarketFormProps) {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onDataChange({ playerImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const questionLength = data.question.length;
  const maxLength = 120;

  return (
    <div className="space-y-6">
      {/* Template Selector - SIDE BY SIDE */}
      <div className="space-y-3">
        <label className="block text-sm font-black text-gray-900 uppercase tracking-wide">
          Template Style
        </label>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => onDataChange({ template: 'bold' })}
            className={`px-6 py-4 rounded-xl font-bold text-base transition-all border-2 ${
              data.template === 'bold'
                ? 'bg-sky-blue border-sky-blue text-white shadow-lg scale-105'
                : 'bg-gray-50 border-gray-300 text-gray-700 hover:border-sky-blue hover:bg-white'
            }`}
            type="button"
          >
            Bold
          </button>
          <button
            onClick={() => onDataChange({ template: 'minimal' })}
            className={`px-6 py-4 rounded-xl font-bold text-base transition-all border-2 ${
              data.template === 'minimal'
                ? 'bg-sky-blue border-sky-blue text-white shadow-lg scale-105'
                : 'bg-gray-50 border-gray-300 text-gray-700 hover:border-sky-blue hover:bg-white'
            }`}
            type="button"
          >
            Minimal
          </button>
        </div>
      </div>

      {/* Market Question */}
      <div className="space-y-3">
        <label className="block text-sm font-black text-gray-900 uppercase tracking-wide">
          Market Question
        </label>
        <textarea
          value={data.question}
          onChange={(e) => onDataChange({ question: e.target.value })}
          placeholder="Will Aaron Judge hit 3 home runs this week?"
          maxLength={maxLength}
          rows={3}
          className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-300 rounded-xl focus:outline-none focus:bg-white focus:border-sky-blue focus:ring-2 focus:ring-sky-blue/20 resize-none text-base font-semibold text-gray-900 placeholder:text-gray-400"
        />
        <div className="text-sm font-bold text-gray-400 text-right">
          {questionLength}/{maxLength}
        </div>
      </div>

      {/* Options Grid - SIDE BY SIDE */}
      <div className="grid grid-cols-2 gap-4">
        {/* Option 1 */}
        <div className="space-y-3">
          <label className="block text-sm font-black text-gray-900 uppercase tracking-wide">
            Option 1
          </label>
          <input
            type="text"
            value={data.option1}
            onChange={(e) => onDataChange({ option1: e.target.value })}
            placeholder="YES"
            className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-300 rounded-xl focus:outline-none focus:bg-white focus:border-sky-blue focus:ring-2 focus:ring-sky-blue/20 text-base font-bold text-gray-900 placeholder:text-gray-400"
          />
          <input
            type="text"
            value={data.option1Odds}
            onChange={(e) => onDataChange({ option1Odds: e.target.value })}
            placeholder="+250"
            className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-300 rounded-xl focus:outline-none focus:bg-white focus:border-sky-blue focus:ring-2 focus:ring-sky-blue/20 text-base font-bold text-gray-900 placeholder:text-gray-400"
          />
        </div>

        {/* Option 2 */}
        <div className="space-y-3">
          <label className="block text-sm font-black text-gray-900 uppercase tracking-wide">
            Option 2
          </label>
          <input
            type="text"
            value={data.option2}
            onChange={(e) => onDataChange({ option2: e.target.value })}
            placeholder="NO"
            className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-300 rounded-xl focus:outline-none focus:bg-white focus:border-sky-blue focus:ring-2 focus:ring-sky-blue/20 text-base font-bold text-gray-900 placeholder:text-gray-400"
          />
          <input
            type="text"
            value={data.option2Odds}
            onChange={(e) => onDataChange({ option2Odds: e.target.value })}
            placeholder="-300"
            className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-300 rounded-xl focus:outline-none focus:bg-white focus:border-sky-blue focus:ring-2 focus:ring-sky-blue/20 text-base font-bold text-gray-900 placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Sport Selection */}
      <div className="space-y-3">
        <label className="block text-sm font-black text-gray-900 uppercase tracking-wide">
          Sport
        </label>
        <select
          value={data.sport || 'OTHER'}
          onChange={(e) => onDataChange({ sport: e.target.value as any })}
          className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-300 rounded-xl focus:outline-none focus:bg-white focus:border-sky-blue focus:ring-2 focus:ring-sky-blue/20 text-base font-bold text-gray-900 cursor-pointer"
        >
          <option value="MLB">⚾ MLB</option>
          <option value="NBA">🏀 NBA</option>
          <option value="NFL">🏈 NFL</option>
          <option value="NHL">🏒 NHL</option>
          <option value="SOCCER">⚽ SOCCER</option>
          <option value="FUTURES">🔮 FUTURES</option>
          <option value="OTHER">📊 OTHER</option>
        </select>
      </div>

      {/* Player Section with Toggle */}
      <div className="space-y-4 p-5 bg-gray-100 rounded-xl border-2 border-gray-200">
        <div className="flex items-center justify-between">
          <label className="text-sm font-black text-gray-900 uppercase tracking-wide">
            Player Details
          </label>
          <button
            onClick={() => onDataChange({ showPlayerName: !data.showPlayerName })}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${
              data.showPlayerName
                ? 'bg-sky-blue text-white shadow-lg scale-105'
                : 'bg-white border-2 border-gray-300 text-gray-700'
            }`}
            type="button"
          >
            {data.showPlayerName ? <Eye size={16} /> : <EyeOff size={16} />}
            {data.showPlayerName ? 'Show' : 'Hide'}
          </button>
        </div>

        <input
          type="text"
          value={data.playerName || ''}
          onChange={(e) => onDataChange({ playerName: e.target.value })}
          placeholder="Player Name"
          disabled={!data.showPlayerName}
          className="w-full px-5 py-4 bg-white border-2 border-gray-300 rounded-xl focus:outline-none focus:border-sky-blue focus:ring-2 focus:ring-sky-blue/20 text-base font-bold text-gray-900 placeholder:text-gray-400 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200"
        />

        <input
          type="text"
          value={data.playerLine || ''}
          onChange={(e) => onDataChange({ playerLine: e.target.value })}
          placeholder="e.g., Judge o/u 2.5 HRs"
          disabled={!data.showPlayerName}
          className="w-full px-5 py-4 bg-white border-2 border-gray-300 rounded-xl focus:outline-none focus:border-sky-blue focus:ring-2 focus:ring-sky-blue/20 text-base font-bold text-gray-900 placeholder:text-gray-400 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200"
        />

        <div className="flex items-center gap-3">
          <button
            onClick={() => onDataChange({ showPlayerImage: !data.showPlayerImage })}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
              data.showPlayerImage
                ? 'bg-sky-blue text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
            type="button"
          >
            {data.showPlayerImage ? <Eye size={14} /> : <EyeOff size={14} />}
            Image
          </button>

          {data.showPlayerImage && (
            <>
              <label className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-gray-200 rounded-lg cursor-pointer hover:border-sky-blue transition-colors">
                <Upload size={16} />
                <span className="text-xs font-semibold">Upload</span>
                <input
                  type="file"
                  accept="image/jpeg,image/png"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>

              {data.playerImage && (
                <div className="flex items-center gap-2">
                  <img
                    src={data.playerImage}
                    alt="Preview"
                    className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
                  />
                  <button
                    onClick={() => onDataChange({ playerImage: undefined })}
                    className="text-xs text-red-500 hover:text-red-700 font-semibold"
                    type="button"
                  >
                    Remove
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Category */}
      <div className="space-y-3">
        <label className="block text-sm font-black text-gray-900 uppercase tracking-wide">
          Category
        </label>
        <input
          type="text"
          value={data.category || ''}
          onChange={(e) => onDataChange({ category: e.target.value })}
          placeholder="MLB, NBA, NFL..."
          className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-300 rounded-xl focus:outline-none focus:bg-white focus:border-sky-blue focus:ring-2 focus:ring-sky-blue/20 text-base font-bold text-gray-900 placeholder:text-gray-400"
        />
      </div>

      {/* Volume with Toggle */}
      <div className="space-y-4 p-5 bg-gray-100 rounded-xl border-2 border-gray-200">
        <div className="flex items-center justify-between">
          <label className="text-sm font-black text-gray-900 uppercase tracking-wide">
            Volume Traded
          </label>
          <button
            onClick={() => onDataChange({ showVolume: !data.showVolume })}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${
              data.showVolume
                ? 'bg-sky-blue text-white shadow-lg scale-105'
                : 'bg-white border-2 border-gray-300 text-gray-700'
            }`}
            type="button"
          >
            {data.showVolume ? <Eye size={16} /> : <EyeOff size={16} />}
            {data.showVolume ? 'Show' : 'Hide'}
          </button>
        </div>

        <input
          type="text"
          value={data.volumeTraded || ''}
          onChange={(e) => onDataChange({ volumeTraded: e.target.value })}
          placeholder="1,234,567.89"
          disabled={!data.showVolume}
          className="w-full px-5 py-4 bg-white border-2 border-gray-300 rounded-xl focus:outline-none focus:border-sky-blue focus:ring-2 focus:ring-sky-blue/20 text-base font-bold text-gray-900 placeholder:text-gray-400 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200"
        />
      </div>

      {/* Aspect Ratio - SIDE BY SIDE */}
      <div className="space-y-3">
        <label className="block text-sm font-black text-gray-900 uppercase tracking-wide">
          Format
        </label>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => onDataChange({ aspectRatio: '1:1' })}
            className={`px-6 py-4 rounded-xl font-bold text-base transition-all border-2 ${
              data.aspectRatio === '1:1'
                ? 'bg-sky-blue border-sky-blue text-white shadow-lg scale-105'
                : 'bg-gray-50 border-gray-300 text-gray-700 hover:border-sky-blue hover:bg-white'
            }`}
            type="button"
          >
            1:1 Square
            <div className="text-sm opacity-75 mt-1 font-semibold">Instagram</div>
          </button>
          <button
            onClick={() => onDataChange({ aspectRatio: '1.91:1' })}
            className={`px-6 py-4 rounded-xl font-bold text-base transition-all border-2 ${
              data.aspectRatio === '1.91:1'
                ? 'bg-sky-blue border-sky-blue text-white shadow-lg scale-105'
                : 'bg-gray-50 border-gray-300 text-gray-700 hover:border-sky-blue hover:bg-white'
            }`}
            type="button"
          >
            1.91:1 Wide
            <div className="text-sm opacity-75 mt-1 font-semibold">Twitter</div>
          </button>
        </div>
      </div>
    </div>
  );
}
