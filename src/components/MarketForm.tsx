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
      {/* Market Question */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-900">
          Market Question
        </label>
        <textarea
          value={data.question}
          onChange={(e) => onDataChange({ question: e.target.value })}
          placeholder="Will Aaron Judge hit 3 home runs this week?"
          maxLength={maxLength}
          rows={3}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent resize-none text-sm font-medium"
        />
        <div className="text-xs text-gray-500 text-right">
          {questionLength}/{maxLength}
        </div>
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Option 1 */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-gray-700 uppercase">
            Option 1
          </label>
          <input
            type="text"
            value={data.option1}
            onChange={(e) => onDataChange({ option1: e.target.value })}
            placeholder="YES"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent text-sm font-semibold"
          />
          <input
            type="text"
            value={data.option1Odds}
            onChange={(e) => onDataChange({ option1Odds: e.target.value })}
            placeholder="+250"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent text-sm font-semibold"
          />
        </div>

        {/* Option 2 */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-gray-700 uppercase">
            Option 2
          </label>
          <input
            type="text"
            value={data.option2}
            onChange={(e) => onDataChange({ option2: e.target.value })}
            placeholder="NO"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent text-sm font-semibold"
          />
          <input
            type="text"
            value={data.option2Odds}
            onChange={(e) => onDataChange({ option2Odds: e.target.value })}
            placeholder="-300"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent text-sm font-semibold"
          />
        </div>
      </div>

      {/* Sport Selection */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-900">
          Sport
        </label>
        <select
          value={data.sport || 'OTHER'}
          onChange={(e) => onDataChange({ sport: e.target.value as any })}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent text-sm font-semibold"
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
      <div className="space-y-3 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold text-gray-900">
            Player Details
          </label>
          <button
            onClick={() => onDataChange({ showPlayerName: !data.showPlayerName })}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
              data.showPlayerName
                ? 'bg-sky-blue text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
            type="button"
          >
            {data.showPlayerName ? <Eye size={14} /> : <EyeOff size={14} />}
            {data.showPlayerName ? 'Show' : 'Hide'}
          </button>
        </div>

        <input
          type="text"
          value={data.playerName || ''}
          onChange={(e) => onDataChange({ playerName: e.target.value })}
          placeholder="Player Name"
          disabled={!data.showPlayerName}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent text-sm font-medium disabled:bg-gray-100 disabled:text-gray-400"
        />

        <input
          type="text"
          value={data.playerLine || ''}
          onChange={(e) => onDataChange({ playerLine: e.target.value })}
          placeholder="e.g., Judge o/u 2.5 HRs"
          disabled={!data.showPlayerName}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent text-sm font-medium disabled:bg-gray-100 disabled:text-gray-400"
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
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-900">
          Category
        </label>
        <input
          type="text"
          value={data.category || ''}
          onChange={(e) => onDataChange({ category: e.target.value })}
          placeholder="MLB, NBA, NFL..."
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent text-sm font-medium"
        />
      </div>

      {/* Volume with Toggle */}
      <div className="space-y-3 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between">
          <label className="text-sm font-semibold text-gray-900">
            Volume Traded
          </label>
          <button
            onClick={() => onDataChange({ showVolume: !data.showVolume })}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
              data.showVolume
                ? 'bg-sky-blue text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
            type="button"
          >
            {data.showVolume ? <Eye size={14} /> : <EyeOff size={14} />}
            {data.showVolume ? 'Show' : 'Hide'}
          </button>
        </div>

        <input
          type="text"
          value={data.volumeTraded || ''}
          onChange={(e) => onDataChange({ volumeTraded: e.target.value })}
          placeholder="1,234,567.89"
          disabled={!data.showVolume}
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent text-sm font-medium disabled:bg-gray-100 disabled:text-gray-400"
        />
      </div>

      {/* Aspect Ratio */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-900">
          Format
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => onDataChange({ aspectRatio: '1:1' })}
            className={`px-4 py-3 rounded-lg font-semibold text-sm transition-all border-2 ${
              data.aspectRatio === '1:1'
                ? 'bg-sky-blue border-sky-blue text-white shadow-md'
                : 'bg-white border-gray-200 text-gray-700 hover:border-sky-blue'
            }`}
            type="button"
          >
            1:1 Square
            <div className="text-xs opacity-75 mt-0.5">Instagram</div>
          </button>
          <button
            onClick={() => onDataChange({ aspectRatio: '1.91:1' })}
            className={`px-4 py-3 rounded-lg font-semibold text-sm transition-all border-2 ${
              data.aspectRatio === '1.91:1'
                ? 'bg-sky-blue border-sky-blue text-white shadow-md'
                : 'bg-white border-gray-200 text-gray-700 hover:border-sky-blue'
            }`}
            type="button"
          >
            1.91:1 Wide
            <div className="text-xs opacity-75 mt-0.5">Twitter</div>
          </button>
        </div>
      </div>
    </div>
  );
}
