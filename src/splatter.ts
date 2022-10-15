import {
  Point,
  randomize,
  pathFromPoints,
  svgImageFromPath,
  svgFromPath,
} from './point';

const generatePoints = (count: number, length: number, dot: number) => {
  console.log('generatePoints', count, length, dot);
  const points: Point[] = [];
  const [cx, cy] = [256, 256]; // canvas center
  const r0 = 120; // radius of the first circle
  const speed = Math.PI / count; // speed of rotation
  for (
    let i = speed, alt = 0, r1 = r0;
    i < Math.PI * 2;
    i += randomize(speed, 0.9),
      alt = (alt + 1) % 3,
      r1 = (randomize(r1, 0.2) * 2 + r0) / 3
  ) {
    if (alt == 0) {
      const r = r1 * (1 + randomize(length, 1));
      const arc = randomize(dot, 0.5); // arc length
      points.push({
        x: cx + r1 * Math.cos(i - (speed * arc) / 2),
        y: cy + r1 * Math.sin(i - (speed * arc) / 2),
        c: false,
        r: 0.5,
      });
      points.push({
        x: cx + r * Math.cos(i - (speed * arc) / 2),
        y: cy + r * Math.sin(i - (speed * arc) / 2),
        c: false,
        r: 0.5,
      });
      points.push({
        x: cx + r * (1 + arc / 2) * Math.cos(i - speed * arc),
        y: cy + r * (1 + arc / 2) * Math.sin(i - speed * arc),
        c: false,
        r: 0.5,
      });
      points.push({
        x: cx + r * (1 + arc / 2) * Math.cos(i + speed * arc),
        y: cy + r * (1 + arc / 2) * Math.sin(i + speed * arc),
        c: false,
        r: 0.5,
      });
      points.push({
        x: cx + r * Math.cos(i + (speed * arc) / 2),
        y: cy + r * Math.sin(i + (speed * arc) / 2),
        c: false,
        r: 0.5,
      });
      points.push({
        x: cx + r1 * Math.cos(i + (speed * arc) / 2),
        y: cy + r1 * Math.sin(i + (speed * arc) / 2),
        c: false,
        r: 0.5,
      });
    } else {
      points.push({
        x: cx + r1 * Math.cos(i),
        y: cy + r1 * Math.sin(i),
        c: false,
        r: 0.5,
      });
    }
  }
  console.log(points);
  return points;
};

export const generateSVGImage = (color: string) => {
  const points = generatePoints(
    randomize(30, 0.5),
    randomize(0.2, 0.5),
    randomize(0.3, 0.5),
  );
  const path = pathFromPoints(points);
  // return { path, color };
  return svgFromPath(path, color);
  // return svgImageFromPath(path, color);
};
