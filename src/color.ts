const busHues = new Map<string, number>();

const lightness = 2 / 3;
const maxChroma = 0.175;

export function getBusColor(busId: string, timestamp: Temporal.Instant): string {
  const hue = busHues.getOrInsert(busId, (busHues.size * 137.5) % 360);

  const ageMinutes = Temporal.Now.instant().since(timestamp).total("minutes");

  const chroma = maxChroma * (1 - ageMinutes / 60);

  return `oklch(${lightness} ${chroma} ${hue})`;
}
