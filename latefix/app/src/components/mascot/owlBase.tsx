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

            {/* Background Glow */}
            <motion.circle
                cx="100"
                cy="105"
                r="85"
                fill={`url(#glow-${state})`}
                animate={{
                    r: state === "celebrating" ? [85, 95, 85 ] : 85,
                    opacity: state === "sleeping" ? 0.3 : 1,
                }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Owl Feet */}
            <motion.g
                animate={{
                    y: state === "celebrating" ? [-2, 2, -2] : 0,
                }}
                transition={{ duration: 0.3, repeat: state === "celebrating" ? Infinity : 0 }}
      >
        <ellipse cx="80" cy="170" rx="12" ry="5" fill={feetColour} />
        <ellipse cx="120" cy="170" rx="12" ry="5" fill={feetColour} />
                {/* Toes */}
                <circle cx="72" cy="172" r="3" fill={feetColour} />
                <circle cx="80" cy="174" r="3" fill={feetColour} />
                <circle cx="88" cy="172" r="3" fill={feetColour} />
                <circle cx="112" cy="172" r="3" fill={feetColour} />
                <circle cx="120" cy="174" r="3" fill={feetColour} />
                <circle cx="128" cy="172" r="3" fill={feetColour} />            
            </motion.g>

            {/* Owl Body */}
           <motion.g
        filter="url(#shadow)"
        animate={{
          y: state === "sleeping" ? [0, 2, 0] : state === "celebrating" ? [0, -8, 0] : state === "waving" ? [0, -3, 0] : state === "idle" ? [0, -2, 0] : 0,
          rotate: state === "celebrating" ? [0, -3, 3, 0] : state === "waving" ? [0, -2, 2, 0] : state === "waking" ? [0, -1, 1, 0] : 0,
        }}
        transition={{
          duration: state === "sleeping" ? 3 : state === "celebrating" ? 0.5 : state === "waving" ? 1.2 : 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ originX: "100px", originY: "120px" }}
      >
        {/* Main body */}
        <ellipse cx="100" cy="120" rx="52" ry="55" fill={bodyColour} />

        {/* Belly */}
        <ellipse cx="100" cy="132" rx="32" ry="34" fill={belly} opacity="0.4" />

        {/* Belly pattern - chevrons */}
        <motion.g opacity={state === "sleeping" ? 0.3 : 0.6}>
          <path d="M85 120 L100 126 L115 120" stroke={bodyDark} strokeWidth="1.5" fill="none" />
          <path d="M87 128 L100 134 L113 128" stroke={bodyDark} strokeWidth="1.5" fill="none" />
          <path d="M89 136 L100 142 L111 136" stroke={bodyDark} strokeWidth="1.5" fill="none" />
          <path d="M91 144 L100 150 L109 144" stroke={bodyDark} strokeWidth="1.5" fill="none" />
        </motion.g>

        {/* Left Wing */}
        <motion.path
            d="M48 100 C35 120 38 150 55 160 C55 140 50 120 48 100Z"
            fill={bodyDark}
            animate={{
                d: 
                state === "celebrating"
                ? [
                    "M48 100 C35 120 38 150 55 160 C55 140 50 120 48 100Z",
                    "M35 85 C20 105 28 140 50 155 C50 130 40 108 35 85Z",
                    "M48 100 C35 120 38 150 55 160 C55 140 50 120 48 100Z",
                ]
            : state === "reminding"
                ? [
                    "M48 100 C35 38 150 55 160 C55 140 50 120 48 100Z",
                    "M40 95 C25 115 30 148 52 158 C52 135 45 113 40 95Z",
                    "M48 100 C35 120 38 150 55 160 C55 140 50 120 48 100Z",
                ]
                : "M48 100 C35 120 38 150 55 160 C55 140 50 120 48 100Z"
            }}
            transition={{ 
                duration: state === "celebrating" ? 0.4 : 1,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />

        {/* Right Wing */}
        <motion.path
            d="M152 100 C165 120 162 150 145 160 C145 140 150 120 152 100Z"
            fill={bodyDark}
            animate={{
                d:
                state === "waving"
                ? [
                    "M152 100 C165 120 162 150 145 160 C145 140 150 120 152 100Z",
                    "M160 75 C185 65 190 85 175 100 C170 90 165 80 160 75Z",
                    "M160 75 C190 55 195 80 178 95 C172 85 168 76 160 75Z",
                    "M160 75 C185 65 190 85 175 100 C170 90 165 80 160 75Z",
                    "M152 100 C165 120 162 150 145 160 C145 140 150 120 152 100Z",
                ]
                : state === "celebrating"
                ? [
                    "M152 100 C165 120 162 150 145 160 C145 140 150 120 152 100Z",
                    "M165 85 C180 105 172 140 150 155 C150 130 160 108 165 85Z",
                    "M152 100 C165 120 162 150 145 160 C145 140 150 120 152 100Z",
                ]
                : state === "reminding"
                ? [
                    "M152 100 C165 120 162 150 145 160 C145 140 150 120 152 100Z",
                    "M160 95 C175 115 170 148 148 158 C148 135 158 113 160 95Z",
                    "M152 100 C165 120 162 150 145 160 C145 140 150 120 152 100Z",
                ]
                : "M152 100 C165 120 162 150 145 160 C145 140 150 120 152 100Z",
            }}
            transition={{
                duration: state === "waving" ? 1.4 : state === "celebrating" ? 0.4 : 1,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />

        </svg>