import { forwardRef } from 'react';
import type { TemplateProps } from '../../types/market';
import { formatVolume } from '../../utils/formatOdds';
import novigLogoWhite from '../../assets/novig-logo-white.svg';

const BoldTemplate = forwardRef<HTMLDivElement, TemplateProps>(
  ({ data, width, height }, ref) => {
    const isSquare = width === height;
    const scale = width / 1080;

    const fontSize = {
      question: isSquare ? 52 * scale : 32 * scale,
      playerName: isSquare ? 32 * scale : 22 * scale,
      playerLine: isSquare ? 24 * scale : 16 * scale,
      option: isSquare ? 96 * scale : 56 * scale,
      odds: isSquare ? 32 * scale : 20 * scale,
      footer: isSquare ? 18 * scale : 12 * scale,
      sportIcon: isSquare ? 120 * scale : 80 * scale, // Corner icon
    };

    const spacing = {
      padding: isSquare ? '48px' : '32px',
      questionMargin: isSquare ? '32px' : '20px',
      ticketMargin: isSquare ? '32px' : '20px',
      logoMarginBottom: isSquare ? '48px' : '24px',
      logoMarginTop: isSquare ? '16px' : '12px',
      logoHeight: isSquare ? 48 : 32,
      optionPadding: isSquare ? '32px 20px' : '20px 16px',
      dividerMarginTop: isSquare ? '32px' : '20px',
      dividerMarginBottom: isSquare ? '20px' : '12px',
    };

    return (
      <div
        ref={ref}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: '#0A0A0A',
          display: 'flex',
          flexDirection: 'column',
          padding: spacing.padding,
          boxSizing: 'border-box',
          position: 'relative',
          fontFamily: 'PP Monument Extended, system-ui, sans-serif',
          border: '8px solid #7ACFFF',
          borderRadius: '24px',
        }}
      >
        {/* Sport Icon removed - cleaner design */}

        {/* Market Question */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: spacing.questionMargin,
          }}
        >
          <h1
            style={{
              fontSize: `${fontSize.question}px`,
              fontWeight: 900,
              color: '#FFFFFF',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              margin: 0,
              fontFamily: 'PP Monument Extended, system-ui, sans-serif',
            }}
          >
            {data.question || 'ENTER YOUR MARKET QUESTION'}
          </h1>
        </div>

        {/* Ticket-Style Player Section */}
        {data.showPlayerName && (data.playerName || data.playerLine) && (
          <>
            <div
              style={{
                backgroundColor: 'rgba(122, 207, 255, 0.15)',
                border: '2px solid #7ACFFF',
                borderRadius: '12px',
                padding: '20px 24px',
                marginBottom: spacing.ticketMargin,
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                position: 'relative',
              }}
            >
              {/* Player Info */}
              <div style={{ flex: 1 }}>
                {data.playerName && (
                  <div
                    style={{
                      fontSize: `${fontSize.playerName}px`,
                      fontWeight: 900,
                      color: '#FFFFFF',
                      textTransform: 'uppercase',
                      letterSpacing: '-0.01em',
                      marginBottom: '8px',
                      fontFamily: 'PP Monument Extended, system-ui, sans-serif',
                    }}
                  >
                    {data.playerName}
                  </div>
                )}
                {data.playerLine && (
                  <div
                    style={{
                      fontSize: `${fontSize.playerLine}px`,
                      fontWeight: 600,
                      color: '#7ACFFF',
                      letterSpacing: '0.01em',
                      fontFamily: 'PP Monument Extended, system-ui, sans-serif',
                    }}
                  >
                    {data.playerLine}
                  </div>
                )}
              </div>

              {/* Player Image (if provided) */}
              {data.showPlayerImage && data.playerImage && (
                <div
                  style={{
                    width: `${isSquare ? 80 : 64}px`,
                    height: `${isSquare ? 80 : 64}px`,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    flexShrink: 0,
                    border: '3px solid #7ACFFF',
                  }}
                >
                  <img
                    src={data.playerImage}
                    alt={data.playerName}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              )}

              {/* Decorative corner */}
              <div
                style={{
                  position: 'absolute',
                  top: '-2px',
                  right: '-2px',
                  width: '24px',
                  height: '24px',
                  backgroundColor: '#7ACFFF',
                  clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
                }}
              />
            </div>
          </>
        )}

        {/* Novig Logo - BIG and Centered */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: spacing.logoMarginBottom,
            marginTop: spacing.logoMarginTop,
          }}
        >
          <img
            src={novigLogoWhite}
            alt="Novig"
            style={{
              height: `${spacing.logoHeight}px`,
              width: 'auto',
            }}
          />
        </div>

        {/* YES/NO Split Section */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
            flex: 1,
            alignItems: 'center',
          }}
        >
          {/* Option 1 (YES) */}
          <div
            style={{
              textAlign: 'center',
              padding: spacing.optionPadding,
              backgroundColor: 'rgba(122, 207, 255, 0.1)',
              borderRadius: '16px',
              border: '2px solid rgba(122, 207, 255, 0.3)',
            }}
          >
            <div
              style={{
                fontSize: `${fontSize.option}px`,
                fontWeight: 900,
                color: '#7ACFFF',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                fontFamily: 'PP Monument Extended, system-ui, sans-serif',
              }}
            >
              {data.option1 || 'YES'}
            </div>
            <div
              style={{
                fontSize: `${fontSize.odds}px`,
                fontWeight: 700,
                color: '#FFFFFF',
                fontFamily: 'PP Monument Extended, system-ui, sans-serif',
              }}
            >
              {data.option1Odds || '+250'}
            </div>
          </div>

          {/* Option 2 (NO) */}
          <div
            style={{
              textAlign: 'center',
              padding: spacing.optionPadding,
              backgroundColor: 'rgba(122, 207, 255, 0.1)',
              borderRadius: '16px',
              border: '2px solid rgba(122, 207, 255, 0.3)',
            }}
          >
            <div
              style={{
                fontSize: `${fontSize.option}px`,
                fontWeight: 900,
                color: '#7ACFFF',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                fontFamily: 'PP Monument Extended, system-ui, sans-serif',
              }}
            >
              {data.option2 || 'NO'}
            </div>
            <div
              style={{
                fontSize: `${fontSize.odds}px`,
                fontWeight: 700,
                color: '#FFFFFF',
                fontFamily: 'PP Monument Extended, system-ui, sans-serif',
              }}
            >
              {data.option2Odds || '-300'}
            </div>
          </div>
        </div>

        {/* Bottom Section - Category and Volume */}
        {(data.category || (data.showVolume && data.volumeTraded)) && (
          <>
            {/* Divider */}
            <div
              style={{
                width: '100%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, #333333, transparent)',
                marginTop: spacing.dividerMarginTop,
                marginBottom: spacing.dividerMarginBottom,
              }}
            />

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {/* Category with Sport */}
              {data.category && (
                <div
                  style={{
                    fontSize: `${fontSize.footer}px`,
                    fontWeight: 700,
                    color: '#7ACFFF',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontFamily: 'PP Monument Extended, system-ui, sans-serif',
                  }}
                >
                  {data.category}
                </div>
              )}

              {/* Volume Traded */}
              {data.showVolume && data.volumeTraded && (
                <div
                  style={{
                    fontSize: `${fontSize.footer}px`,
                    fontWeight: 600,
                    color: '#666666',
                    fontFamily: 'PP Monument Extended, system-ui, sans-serif',
                  }}
                >
                  TRADED: ${formatVolume(data.volumeTraded)}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    );
  }
);

BoldTemplate.displayName = 'BoldTemplate';

export default BoldTemplate;
