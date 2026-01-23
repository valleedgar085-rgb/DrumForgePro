export interface TrackStep {
  active: boolean;
  velocity: number;
  probability?: number;
}

export interface DrumPattern {
  name: string;
  bpm: number;
  steps: number;
  tracks: {
    kick: TrackStep[];
    snare: TrackStep[];
    hihat: TrackStep[];
    clap: TrackStep[];
  };
}

export const generateTrapPattern = (steps = 16): DrumPattern => {
  const kick = Array(steps).fill(0).map((_, i) => ({
    active: i === 0 || i === 8 || (i > 10 && Math.random() > 0.7),
    velocity: 1
  }));

  const snare = Array(steps).fill(0).map((_, i) => ({
    active: i === 4 || i === 12,
    velocity: 0.9
  }));

  const hihat = Array(steps).fill(0).map((_, i) => ({
    active: i % 2 === 0 || (Math.random() > 0.8),
    velocity: i % 2 === 0 ? 0.8 : 0.6
  }));

  const clap = Array(steps).fill(0).map(() => ({
     active: false,
     velocity: 0.8
  }));

  return {
    name: "Generated Trap",
    bpm: 140,
    steps,
    tracks: { kick, snare, hihat, clap }
  };
};
