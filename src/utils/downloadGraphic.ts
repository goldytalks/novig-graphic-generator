import html2canvas from 'html2canvas';

/**
 * Captures an HTML element and downloads it as a high-quality PNG
 * @param element - The DOM element to capture
 * @param filename - The name for the downloaded file (without extension)
 */
export async function downloadGraphic(
  element: HTMLElement,
  filename: string
): Promise<void> {
  try {
    // Capture the element with 2x scale for high quality
    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: null,
      logging: false,
      useCORS: true,
      allowTaint: true,
    });

    // Convert canvas to blob
    canvas.toBlob((blob) => {
      if (!blob) {
        throw new Error('Failed to create image blob');
      }

      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${filename}.png`;

      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up
      URL.revokeObjectURL(url);
    }, 'image/png');
  } catch (error) {
    console.error('Error downloading graphic:', error);
    throw new Error('Failed to download graphic. Please try again.');
  }
}

/**
 * Generates a timestamped filename for the graphic
 * @returns Filename with timestamp (e.g., "novig-market-1633024800000")
 */
export function generateFilename(): string {
  const timestamp = Date.now();
  return `novig-market-${timestamp}`;
}
