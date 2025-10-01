import { forwardRef } from 'react';
import type { TemplateProps } from '../../types/market';
import { TrendingUp } from 'lucide-react';
import { formatVolume } from '../../utils/formatOdds';
import novigLogoBlack from '../../assets/novig-logo-black.svg';

const MinimalTemplate = forwardRef<HTMLDivElement, TemplateProps>(
  ({ data, width, height }, ref) => {
    const isSquare = width === height;
    const scale = width / 1080;

    const fontSize = {
      question: isSquare ? 56 * scale : 44 * scale,
      playerName: isSquare ? 32 * scale : 28 * scale,
      option: isSquare ? 72 * scale : 56 * scale,
      odds: isSquare ? 24 * scale : 20 * scale,
      footer: isSquare ? 18 * scale : 16 * scale,
    };

    return (
      <div
        ref={ref}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          padding: '48px',
          boxSizing: 'border-box',
          border: '2px solid #E5E5E5',
        }}
      >
        {/* Market Question */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '40px',
          }}
        >
          <h1
            style={{
              fontSize: `${fontSize.question}px`,
              fontWeight: 700,
              color: '#1A1A1A',
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            {data.question || 'Enter your market question'}
          </h1>
        </div>

        {/* Player Section */}
        {(data.playerName || data.playerImage) && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                width: `${isSquare ? 60 : 48}px`,
                height: `${isSquare ? 60 : 48}px`,
                borderRadius: '50%',
                backgroundColor: '#F0F0F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              {data.playerImage ? (
                <img
                  src={data.playerImage}
                  alt={data.playerName}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              ) : (
                <TrendingUp size={isSquare ? 32 : 24} color="#999999" />
              )}
            </div>
            {data.playerName && (
              <span
                style={{
                  fontSize: `${fontSize.playerName}px`,
                  fontWeight: 600,
                  color: '#333333',
                }}
              >
                {data.playerName}
              </span>
            )}
          </div>
        )}

        {/* Options Section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
            flex: 1,
            alignItems: 'center',
            maxWidth: '800px',
            margin: '0 auto',
            width: '100%',
          }}
        >
          {/* Option 1 */}
          <div
            style={{
              textAlign: 'center',
              padding: '24px',
              backgroundColor: '#F8F8F8',
              borderRadius: '12px',
            }}
          >
            <div
              style={{
                fontSize: `${fontSize.option}px`,
                fontWeight: 700,
                color: '#5B8AC5',
                marginBottom: '8px',
              }}
            >
              {data.option1 || 'YES'}
            </div>
            <div
              style={{
                fontSize: `${fontSize.odds}px`,
                fontWeight: 500,
                color: '#666666',
              }}
            >
              {data.option1Odds || '+250'}
            </div>
          </div>

          {/* Option 2 */}
          <div
            style={{
              textAlign: 'center',
              padding: '24px',
              backgroundColor: '#F8F8F8',
              borderRadius: '12px',
            }}
          >
            <div
              style={{
                fontSize: `${fontSize.option}px`,
                fontWeight: 700,
                color: '#5B8AC5',
                marginBottom: '8px',
              }}
            >
              {data.option2 || 'NO'}
            </div>
            <div
              style={{
                fontSize: `${fontSize.odds}px`,
                fontWeight: 500,
                color: '#666666',
              }}
            >
              {data.option2Odds || '-300'}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: '40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #E5E5E5',
            paddingTop: '24px',
          }}
        >
          {/* Category */}
          {data.category && (
            <div
              style={{
                fontSize: `${fontSize.footer}px`,
                fontWeight: 600,
                color: '#999999',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              {data.category}
            </div>
          )}

          <div style={{ flex: 1 }} />

          {/* Volume */}
          {data.volumeTraded && (
            <div
              style={{
                fontSize: `${fontSize.footer}px`,
                fontWeight: 500,
                color: '#999999',
                marginRight: '24px',
              }}
            >
              Volume: ${formatVolume(data.volumeTraded)}
            </div>
          )}

          {/* Logo */}
          <img
            src={novigLogoBlack}
            alt="Novig"
            style={{
              height: `${isSquare ? 20 : 18}px`,
              width: 'auto',
            }}
          />
        </div>
      </div>
    );
  }
);

MinimalTemplate.displayName = 'MinimalTemplate';

export default MinimalTemplate;
