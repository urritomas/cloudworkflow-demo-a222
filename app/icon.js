import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
        }}
      >
        <svg viewBox="0 0 100 100" width="32" height="32">
          <circle cx="50" cy="50" r="45" fill="#DC2626" />
          <ellipse cx="50" cy="50" rx="45" ry="22.5" fill="#FCD34D" />
          <line x1="5" y1="50" x2="95" y2="50" stroke="#000" strokeWidth="2" />
          <circle cx="50" cy="50" r="12" fill="#FCD34D" stroke="#000" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="6" fill="#000" />
        </svg>
      </div>
    ),
    { ...size }
  );
}