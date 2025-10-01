import { forwardRef } from 'react';
import type { TemplateProps } from '../../types/market';
import { TrendingUp } from 'lucide-react';
import { formatVolume } from '../../utils/formatOdds';
import novigLogoWhite from '../../assets/novig-logo-white.svg';

const GradientTemplate = forwardRef<HTMLDivElement, TemplateProps>(
  ({ data, width, height }, ref) => {
    const isSquare = width === height;
    const scale = width / 1080;

    const fontSize = {
      question: isSquare ? 60 * scale : 48 * scale,
      playerName: isSquare ? 36 * scale : 30 * scale,
      option: isSquare ? 80 * scale : 60 * scale,
      odds: isSquare ? 26 * scale : 22 * scale,
      footer: isSquare ? 18 * scale : 16 * scale,
    };

    return (
      <div
        ref={ref}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          display: 'flex',
          flexDirection: 'column',
          padding: '48px',
          boxSizing: 'border-box',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Overlay for better text readability */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.25)',
            zIndex: 0,
          }}
        />

        {/* Content Container */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          {/* Market Question */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: '36px',
            }}
          >
            <h1
              style={{
                fontSize: `${fontSize.question}px`,
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.2,
                margin: 0,
                textShadow: '0 4px 12px rgba(0,0,0,0.4)',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
              }}
            >
              {data.question || 'ENTER YOUR MARKET QUESTION'}
            </h1>
          </div>

          {/* Player Section */}
          {(data.playerName || data.playerImage) && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                marginBottom: '36px',
              }}
            >
              <div
                style={{
                  width: `${isSquare ? 70 : 56}px`,
                  height: `${isSquare ? 70 : 56}px`,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  border: '3px solid rgba(255, 255, 255, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  backdropFilter: 'blur(10px)',
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
                  <TrendingUp size={isSquare ? 36 : 28} color="#FFFFFF" />
                )}
              </div>
              {data.playerName && (
                <span
                  style={{
                    fontSize: `${fontSize.playerName}px`,
                    fontWeight: 700,
                    color: '#FFFFFF',
                    textShadow: '0 2px 8px rgba(0,0,0,0.3)',
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
              gap: '24px',
              flex: 1,
              alignItems: 'center',
            }}
          >
            {/* Option 1 */}
            <div
              style={{
                textAlign: 'center',
                padding: '32px',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <div
                style={{
                  fontSize: `${fontSize.option}px`,
                  fontWeight: 900,
                  color: '#FFFFFF',
                  marginBottom: '12px',
                  textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                }}
              >
                {data.option1 || 'YES'}
              </div>
              <div
                style={{
                  fontSize: `${fontSize.odds}px`,
                  fontWeight: 600,
                  color: 'rgba(255, 255, 255, 0.9)',
                }}
              >
                {data.option1Odds || '+250'}
              </div>
            </div>

            {/* Option 2 */}
            <div
              style={{
                textAlign: 'center',
                padding: '32px',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
            >
              <div
                style={{
                  fontSize: `${fontSize.option}px`,
                  fontWeight: 900,
                  color: '#FFFFFF',
                  marginBottom: '12px',
                  textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                }}
              >
                {data.option2 || 'NO'}
              </div>
              <div
                style={{
                  fontSize: `${fontSize.odds}px`,
                  fontWeight: 600,
                  color: 'rgba(255, 255, 255, 0.9)',
                }}
              >
                {data.option2Odds || '-300'}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              marginTop: '36px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              padding: '20px 24px',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)',
            }}
          >
            {/* Category */}
            {data.category && (
              <div
                style={{
                  fontSize: `${fontSize.footer}px`,
                  fontWeight: 700,
                  color: 'rgba(255, 255, 255, 0.95)',
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
                  fontWeight: 600,
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginRight: '24px',
                }}
              >
                Traded: ${formatVolume(data.volumeTraded)}
              </div>
            )}

            {/* Logo */}
            <img
              src={novigLogoWhite}
              alt="Novig"
              style={{
                height: `${isSquare ? 20 : 18}px`,
                width: 'auto',
              }}
            />
          </div>
        </div>
      </div>
    );
  }
);

GradientTemplate.displayName = 'GradientTemplate';

export default GradientTemplate;
