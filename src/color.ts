const busHues = new Map<string, number>();

const lightness = 2 / 3;
const maxChroma = 0.175;

export function getBusColor(busId: string, timestamp: Date): string {
  let hue = busHues.get(busId);
  if (hue === undefined) {
    hue = (busHues.size * 137.5) % 360;
    busHues.set(busId, hue);
  }

  const ageMinutes = Math.max(0, (Date.now() - timestamp.getTime()) / 60000);

  const chroma = Math.max(0, maxChroma * (1 - ageMinutes / 60));

  return `oklch(${lightness} ${chroma} ${hue})`;
}
