# DrumForge Pro

A mobile-first drum machine web application built with React, TypeScript, Tone.js, and Tailwind CSS. Create and edit trap beats with a 16-step sequencer interface featuring AI-powered pattern generation.

## Features

- 🥁 **16-Step Sequencer**: Create rhythms with 4 drum tracks (kick, snare, hihat, clap)
- 🤖 **AI Pattern Generation**: Generate algorithmic trap beats with one click
- 🎵 **Web Audio Engine**: Powered by Tone.js for professional audio playback
- 📱 **Mobile-First Design**: Responsive interface optimized for all devices
- 🌙 **Dark Theme**: Modern UI with dark slate theme and vibrant accents

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS v4
- **Audio Engine**: Tone.js 15
- **Code Quality**: ESLint with TypeScript rules

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/valleedgar085-rgb/DrumForgePro.git
cd DrumForgePro

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## Usage

1. **Play/Stop**: Click the green "PLAY" button to start playback (or red "STOP" to pause)
2. **Toggle Steps**: Click any step button to activate/deactivate drum hits
3. **Generate Patterns**: Click "AI Generate" to create new algorithmic trap beats
4. **Customize**: Manually edit patterns by clicking individual steps

## Project Structure

```
src/
├── features/
│   └── drums/
│       ├── components/
│       │   └── StepSequencer.tsx    # Main sequencer UI component
│       └── lib/
│           ├── drum-sampler.ts      # Audio engine (Tone.js wrapper)
│           └── drum-generator.ts    # Pattern generation algorithms
├── App.tsx                           # Main app component
└── index.css                         # Tailwind CSS imports
```

## Audio Samples

> **Note**: Audio sample files are currently placeholders. To enable sound playback, add drum samples to `/public/assets/samples/`:
> - `kick.wav`
> - `snare.wav`
> - `hihat.wav`
> - `clap.wav`

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

