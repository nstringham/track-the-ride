const busHues: { [busId: string]: number } = {};

const lightness = 2 / 3;
const maxChroma = 0.175;

export function getBusColor(busId: string, timestamp: Temporal.Instant): string {
  if (!(busId in busHues)) {
    busHues[busId] = (Object.keys(busHues).length * 137.5) % 360;
  }

  const hue = busHues[busId];

  const ageMinutes = Temporal.Now.instant().since(timestamp).total("minutes");

  const chroma = maxChroma * (1 - ageMinutes / 60);

  return `oklch(${lightness} ${chroma} ${hue})`;
}
