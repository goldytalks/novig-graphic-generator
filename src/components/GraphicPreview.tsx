import { forwardRef } from 'react';
import type { MarketData } from '../types/market';
import BoldTemplate from './templates/BoldTemplate';
import MinimalTemplate from './templates/MinimalTemplate';
import GradientTemplate from './templates/GradientTemplate';

interface GraphicPreviewProps {
  data: MarketData;
}

const GraphicPreview = forwardRef<HTMLDivElement, GraphicPreviewProps>(
  ({ data }, ref) => {
    // Calculate dimensions based on aspect ratio
    const dimensions =
      data.aspectRatio === '1:1'
        ? { width: 1080, height: 1080 }
        : { width: 1200, height: 628 };

    // Render the selected template
    const renderTemplate = () => {
      switch (data.template) {
        case 'bold':
          return <BoldTemplate data={data} {...dimensions} />;
        case 'minimal':
          return <MinimalTemplate data={data} {...dimensions} />;
        case 'gradient':
          return <GradientTemplate data={data} {...dimensions} />;
        default:
          return <BoldTemplate data={data} {...dimensions} />;
      }
    };

    return (
      <div className="flex flex-col items-center">
        <div className="mb-4 text-sm text-gray-600">
          Preview: {dimensions.width}×{dimensions.height}px
        </div>
        <div
          ref={ref}
          style={{
            width: dimensions.width,
            height: dimensions.height,
            maxWidth: '100%',
            aspectRatio: data.aspectRatio === '1:1' ? '1/1' : '1.91/1',
          }}
          className="shadow-lg"
        >
          {renderTemplate()}
        </div>
      </div>
    );
  }
);

GraphicPreview.displayName = 'GraphicPreview';

export default GraphicPreview;
