import { useState } from 'react';
import { Download, Check } from 'lucide-react';
import { downloadGraphic, generateFilename } from '../utils/downloadGraphic';

interface DownloadButtonProps {
  elementRef: React.RefObject<HTMLDivElement | null>;
}

export default function DownloadButton({ elementRef }: DownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleDownload = async () => {
    if (!elementRef.current) return;

    setIsDownloading(true);
    setShowSuccess(false);

    try {
      const filename = generateFilename();
      await downloadGraphic(elementRef.current, filename);

      // Show success feedback
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download graphic. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg ${
          isDownloading
            ? 'bg-gray-400 cursor-not-allowed'
            : showSuccess
            ? 'bg-reflex-green text-gray-900'
            : 'bg-sky-blue text-white hover:bg-opacity-90 active:scale-95 hover:shadow-xl'
        }`}
        type="button"
      >
        {isDownloading ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Generating...
          </>
        ) : showSuccess ? (
          <>
            <Check size={20} />
            Downloaded!
          </>
        ) : (
          <>
            <Download size={20} />
            Download PNG
          </>
        )}
      </button>
      {showSuccess && (
        <p className="text-sm text-green-600 font-medium">
          Graphic saved successfully!
        </p>
      )}
    </div>
  );
}
