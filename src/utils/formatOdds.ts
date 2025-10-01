/**
 * Validates and formats American odds
 * @param odds - Raw odds string (e.g., "250", "+250", "-300")
 * @returns Formatted odds with proper +/- prefix
 */
export function formatOdds(odds: string): string {
  const trimmed = odds.trim();

  // If empty, return as is
  if (!trimmed) return trimmed;

  // Remove any existing +/- sign
  const numericPart = trimmed.replace(/^[+-]/, '');

  // Check if it's a valid number
  if (!/^\d+$/.test(numericPart)) {
    return trimmed; // Return as is if not valid
  }

  // If it already has a sign, return it
  if (trimmed.startsWith('+') || trimmed.startsWith('-')) {
    return trimmed;
  }

  // Default to positive odds if no sign
  return `+${numericPart}`;
}

/**
 * Formats volume with commas for thousands
 * @param volume - Raw volume string (e.g., "1234567.89")
 * @returns Formatted volume with commas (e.g., "1,234,567.89")
 */
export function formatVolume(volume: string): string {
  const trimmed = volume.trim();

  // If empty, return as is
  if (!trimmed) return trimmed;

  // Split by decimal point
  const parts = trimmed.split('.');
  const integerPart = parts[0];
  const decimalPart = parts[1];

  // Add commas to integer part
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Reconstruct with decimal if present
  return decimalPart !== undefined
    ? `${formattedInteger}.${decimalPart}`
    : formattedInteger;
}
