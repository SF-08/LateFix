import { motion } from "framer-motion";

export type MascotState =
    | "sleeping"
    | "waking"
    | "alert"
    | "celebrating"
    | "reminding"
    | "waving"
    | "idle"

interface OwlBaseProps {
    state: MascotState;
    size?: number;
    className?: string;
}

export function OwlBase({ state, size = 100, className = "" }: OwlBaseProps) {
    const bodyColour = "#802392"
    const bodyLight = "#9b3aad"
    const bodyDark = "#5e1a6b"
    const belly = "#c88fd6"
    const eyeWhite = "#f0e6f4"
    const pupilColour = "#2d0a38"
    const beakColour = "#e8a84c"
    const feetColour = "#e8a84c"
    const blush = "#c060d0"
    const capColour = "#5e1a6b"

    const getEyeState = () => {
        switch (state) {
            case "sleeping":
                return { leftOpen: 0, rightOpen: 0.3, pupilScale: 0.7 }
            case "waking":
                return { leftOpen: 0.5, rightOpen: 0.3, pupilScale: 0.7 }  
            case "alert":
                return { leftOpen: 1, rightOpen: 1, pupilScale: 1 }
            case "celebrating":
                return { leftOpen: 1, rightOpen: 1, pupilScale: 0.8 }
            case "reminding":
                return { leftOpen: 1, rightOpen: 1, pupilScale: 1.1 }
            case "waving":
                return { leftOpen: 1, rightOpen: 0.9, pupilScale: 0.9 }
            case "idle":
                return { leftOpen: 0.8, rightOpen: 0.85, pupilScale: 0.9 }
        }
    }

    const eyeState = getEyeState();

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 200 200"
            className = {className}
            role="img"
            aria-label={`Mascot in ${state} state`}
        >
            {/* Glow effect behind Mascot */}
            <defs>
                <radialGradient id={`glow-${state}`} cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor={bodyColour} stopOpacity="0.3" />
                    <stop offset="100%" stopColor={bodyColour} stopOpacity="0" />
                </radialGradient>
                <filter id="shadow">
                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.3" />
                </filter>
            </defs>
        </svg>