import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';
import { drumEngine } from '../lib/drum-sampler';
import { generateTrapPattern, type DrumPattern } from '../lib/drum-generator';

const ROWS = ['kick', 'snare', 'hihat', 'clap'] as const;

export const StepSequencer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [pattern, setPattern] = useState<DrumPattern>(generateTrapPattern(16));

  useEffect(() => {
    const loop = new Tone.Sequence(
      (_time, step) => {
        setCurrentStep(step);
        ROWS.forEach(row => {
          const trackStep = pattern.tracks[row][step];
          if (trackStep.active) {
            if (!trackStep.probability || Math.random() < trackStep.probability) {
              drumEngine.trigger(row, trackStep.velocity);
            }
          }
        });
      },
      Array.from({ length: 16 }, (_, i) => i),
      "16n"
    ).start(0);

    return () => {
      loop.stop();
      loop.dispose();
    };
  }, [pattern]);

  const togglePlayback = async () => {
    await Tone.start();
    if (isPlaying) {
      Tone.Transport.stop();
    } else {
      Tone.Transport.bpm.value = pattern.bpm;
      Tone.Transport.start();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleStep = (row: keyof typeof pattern.tracks, index: number) => {
    const newTracks = { ...pattern.tracks };
    newTracks[row][index].active = !newTracks[row][index].active;
    setPattern({ ...pattern, tracks: newTracks });
  };

  return (
    <div className="w-full bg-slate-900 p-4 rounded-xl shadow-xl border border-slate-700">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white font-bold text-lg">DrumForge Sequencer</h2>
        <div className="flex gap-2">
          <button 
            onClick={() => setPattern(generateTrapPattern())}
            className="px-4 py-2 bg-purple-600 active:bg-purple-700 text-white rounded-lg font-bold"
          >
            AI Generate
          </button>
          <button 
            onClick={togglePlayback}
            className={`px-6 py-2 rounded-lg font-bold text-white ${
              isPlaying ? 'bg-red-500' : 'bg-green-500'
            }`}
          >
            {isPlaying ? 'STOP' : 'PLAY'}
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-1 overflow-x-auto pb-4">
        {ROWS.map((row) => (
          <div key={row} className="flex gap-1 h-12">
            <div className="w-16 flex-shrink-0 flex items-center text-slate-400 text-xs uppercase font-bold pl-2">
              {row}
            </div>
            {pattern.tracks[row].map((step, i) => (
              <button
                key={i}
                onClick={() => toggleStep(row, i)}
                className={`
                  flex-1 min-w-[30px] rounded-sm transition-colors duration-75
                  ${step.active 
                    ? 'bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]' 
                    : 'bg-slate-800'
                  }
                  ${currentStep === i ? 'border-t-2 border-white' : ''}
                  ${i % 4 === 0 ? 'mr-1' : ''} 
                `}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
