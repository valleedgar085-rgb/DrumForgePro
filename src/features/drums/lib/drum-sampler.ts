import * as Tone from 'tone';

export type DrumKit = '808' | '909' | 'Acoustic';

interface DrumVoices {
  kick: Tone.Player;
  snare: Tone.Player;
  hihat: Tone.Player;
  clap: Tone.Player;
}

class DrumEngine {
  private players: Tone.Players;
  private isLoaded: boolean = false;

  constructor() {
    this.players = new Tone.Players({
      urls: {
        kick: "kick.wav",
        snare: "snare.wav",
        hihat: "hihat.wav",
        clap: "clap.wav",
      },
      baseUrl: "/assets/samples/",
      onload: () => {
        this.isLoaded = true;
        console.log("Drum samples loaded");
      }
    }).toDestination();
  }

  trigger(voice: keyof DrumVoices, velocity: number = 1) {
    if (!this.isLoaded) return;
    if (this.players.has(voice)) {
      const player = this.players.player(voice);
      player.volume.value = 20 * Math.log10(velocity);
      player.start();
    }
  }
}

export const drumEngine = new DrumEngine();
