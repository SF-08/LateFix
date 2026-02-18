import { motion } from "framer-motion";

export type MascotState =
  | "sleeping"
  | "waking"
  | "alert"
  | "celebrating"
  | "reminding"
  | "waving"
  | "idle";

interface OwlBaseProps {
  state: MascotState;
  size?: number;
  className?: string;
}

export function OwlBase({ state, size = 100, className = "" }: OwlBaseProps) {
  const bodyColour = "#802392";
  const bodyLight = "#9b3aad";
  const bodyDark = "#5e1a6b";
  const belly = "#c88fd6";
  const eyeWhite = "#f0e6f4";
  const pupilColour = "#2d0a38";
  const beakColour = "#e8a84c";
  const feetColour = "#e8a84c";
  const blush = "#c060d0";
  const capColour = "#5e1a6b";

  const getEyeState = () => {
    switch (state) {
      case "sleeping":
        return { leftOpen: 0, rightOpen: 0.3, pupilScale: 0.7 };
      case "waking":
        return { leftOpen: 0.5, rightOpen: 0.3, pupilScale: 0.7 };
      case "alert":
        return { leftOpen: 1, rightOpen: 1, pupilScale: 1 };
      case "celebrating":
        return { leftOpen: 1, rightOpen: 1, pupilScale: 0.8 };
      case "reminding":
        return { leftOpen: 1, rightOpen: 1, pupilScale: 1.1 };
      case "waving":
        return { leftOpen: 1, rightOpen: 0.9, pupilScale: 0.9 };
      case "idle":
        return { leftOpen: 0.8, rightOpen: 0.85, pupilScale: 0.9 };
    }
  };

  const eyeState = getEyeState();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
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
          <feDropShadow
            dx="0"
            dy="2"
            stdDeviation="3"
            floodColor="#000"
            floodOpacity="0.3"
          />
        </filter>
      </defs>

      {/* Background Glow */}
      <motion.circle
        cx="100"
        cy="105"
        r="85"
        fill={`url(#glow-${state})`}
        animate={{
          r: state === "celebrating" ? [85, 95, 85] : 85,
          opacity: state === "sleeping" ? 0.3 : 1,
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Owl Feet */}
      <motion.g
        animate={{
          y: state === "celebrating" ? [-2, 2, -2] : 0,
        }}
        transition={{
          duration: 0.3,
          repeat: state === "celebrating" ? Infinity : 0,
        }}
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
          y:
            state === "sleeping"
              ? [0, 2, 0]
              : state === "celebrating"
                ? [0, -8, 0]
                : state === "waving"
                  ? [0, -3, 0]
                  : state === "idle"
                    ? [0, -2, 0]
                    : 0,
          rotate:
            state === "celebrating"
              ? [0, -3, 3, 0]
              : state === "waving"
                ? [0, -2, 2, 0]
                : state === "waking"
                  ? [0, -1, 1, 0]
                  : 0,
        }}
        transition={{
          duration:
            state === "sleeping"
              ? 3
              : state === "celebrating"
                ? 0.5
                : state === "waving"
                  ? 1.2
                  : 2.5,
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
          <path
            d="M85 120 L100 126 L115 120"
            stroke={bodyDark}
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M87 128 L100 134 L113 128"
            stroke={bodyDark}
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M89 136 L100 142 L111 136"
            stroke={bodyDark}
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M91 144 L100 150 L109 144"
            stroke={bodyDark}
            strokeWidth="1.5"
            fill="none"
          />
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
                  : "M48 100 C35 120 38 150 55 160 C55 140 50 120 48 100Z",
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
            duration:
              state === "waving" ? 1.4 : state === "celebrating" ? 0.4 : 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Owl Ear */}
        <motion.g
          animate={{
            rotate:
              state === "alert"
                ? [0, 5, -5, 0]
                : state === "reminding"
                  ? [0, 8, -8, 0]
                  : 0,
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
          style={{
            originX: "100px",
            originY: "60px",
          }}
        >
          <path d="M65 78 L55 45 L78 72Z" fill={bodyColour} />
          <path d="M62 73 L55 48 L72 70Z" fill={bodyLight} />
          <path d="M135 78 L145 45 L122 72Z" fill={bodyColour} />
          <path d="M138 73 L145 48 L128 70Z" fill={bodyLight} />
        </motion.g>

        {/* Owl Face */}
        <ellipse
          cx="100"
          cy="100"
          rx="38"
          ry="35"
          fill={bodyLight}
          opacity="0.5"
        />

        {/* Eye Sockets */}
        <circle cx="80" cy="98" r="18" fill={bodyDark} opacity="0.3" />
        <circle cx="120" cy="98" r="18" fill={bodyDark} opacity="0.3" />

        {/* Eyes */}
        <g>
          {/* Left Eye */}
          <motion.g
            animate={{ scaleY: eyeState.leftOpen }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ originX: "80px", originY: "98px" }}
          >
            <circle cx="80" cy="98" r="14" fill={eyeWhite} />
            <motion.circle
              cx="80"
              cy="98"
              r="8"
              fill={pupilColour}
              animate={{
                cx:
                  state === "reminding"
                    ? [80, 84, 76, 80]
                    : state === "idle"
                      ? [80, 82, 78, 80]
                      : 80,
                scale: eyeState.pupilScale,
              }}
              transition={{
                duration: state === "reminding" ? 0.8 : 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Highlight */}
            <motion.circle
              cx="75"
              cy="93"
              r="3"
              fill="#fff"
              animate={{
                opacity: state === "sleeping" ? 0 : [0.8, 1, 0.8],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle
              cx="83"
              cy="96"
              r="1.5"
              fill="#fff"
              opacity={state === "sleeping" ? 0 : 0.6}
            />
          </motion.g>

          {/* Right eye */}
          <motion.g
            animate={{ scaleY: eyeState.rightOpen }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ originX: "120px", originY: "98px" }}
          >
            <circle cx="120" cy="98" r="14" fill={eyeWhite} />
            <motion.circle
              cx="120"
              cy="98"
              r="8"
              fill={pupilColour}
              animate={{
                cx:
                  state === "reminding"
                    ? [120, 124, 116, 120]
                    : state === "idle"
                      ? [120, 122, 118, 120]
                      : 120,
                scale: eyeState.pupilScale,
              }}
              transition={{
                duration: state === "reminding" ? 0.8 : 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.circle
              cx="115"
              cy="93"
              r="3"
              fill="#fff"
              animate={{
                opacity: state === "sleeping" ? 0 : [0.8, 1, 0.8],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle
              cx="123"
              cy="96"
              r="1.5"
              fill="#fff"
              opacity={state === "sleeping" ? 0 : 0.6}
            />
          </motion.g>
        </g>

        {/* Sleeping Z's */}
        {state === "sleeping" && (
          <g>
            {/* Closed eyes - curved lines */}
            <motion.path
              d="M68 98 Q80 103 92 98"
              stroke={pupilColour}
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            <motion.path
              d="M108 98 Q120 103 132 98"
              stroke={pupilColour}
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            <motion.text
              x="145"
              y="70"
              fill={belly}
              fontSize="16"
              fontWeight="bold"
              animate={{ y: [70, 55, 70], opacity: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              z
            </motion.text>
            <motion.text
              x="155"
              y="55"
              fill={belly}
              fontSize="12"
              fontWeight="bold"
              animate={{ y: [55, 40, 55], opacity: [0, 1, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              z
            </motion.text>
            <motion.text
              x="163"
              y="42"
              fill={belly}
              fontSize="9"
              fontWeight="bold"
              animate={{ y: [42, 28, 42], opacity: [0, 1, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              z
            </motion.text>
          </g>
        )}

        {/* Beak */}
        <motion.path
          d="M93 108 L100 118 L107 108Z"
          fill={beakColour}
          animate={{
            d:
              state === "celebrating"
                ? [
                    "M93 108 L100 118 L107 108Z",
                    "M91 106 L100 120 L109 106Z",
                    "M93 108 L100 118 L107 108Z",
                  ]
                : state === "reminding"
                  ? [
                      "M93 108 L100 118 L107 108Z",
                      "M91 106 L100 120 L109 106Z",
                      "M93 108 L100 118 L107 108Z",
                    ]
                  : "M93 108 L100 118 L107 108Z",
          }}
          transition={{ duration: 0.6, repeat: Infinity }}
        />

        {/* Blush marks */}
        <motion.g
          animate={{
            opacity:
              state === "celebrating"
                ? [0.4, 0.7, 0.4]
                : state === "sleeping"
                  ? 0.3
                  : 0.5,
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ellipse cx="65" cy="108" rx="8" ry="4" fill={blush} opacity="0.4" />
          <ellipse cx="135" cy="108" rx="8" ry="4" fill={blush} opacity="0.4" />
        </motion.g>

        {/* Sleep cap for sleeping state */}
        {state === "sleeping" && (
          <motion.g
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{ originX: "100px", originY: "70px" }}
          >
            <path
              d="M60 82 Q65 50 100 40 Q135 50 140 82 Z"
              fill={capColour}
              opacity="0.9"
            />
            <path
              d="M60 82 Q100 75 140 82"
              stroke={belly}
              strokeWidth="4"
              fill="none"
              opacity="0.5"
            />
            <motion.circle
              cx="100"
              cy="38"
              r="5"
              fill={belly}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.g>
        )}

        {/* Party hat for celebrating */}
        {state === "celebrating" && (
          <motion.g
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            style={{ originX: "100px", originY: "75px" }}
          >
            <path d="M75 78 L100 35 L125 78Z" fill={beakColour} />
            <path d="M80 78 L100 40 L120 78Z" fill="#e85d75" opacity="0.7" />
            <circle cx="100" cy="35" r="4" fill="#FFD700" />
            {/* Confetti dots */}
            <motion.circle
              cx="85"
              cy="60"
              r="2"
              fill="#4ECDC4"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, delay: 0 }}
            />
            <motion.circle
              cx="110"
              cy="55"
              r="2"
              fill="#FFD700"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
            />
            <motion.circle
              cx="95"
              cy="50"
              r="1.5"
              fill="#FF6B6B"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, delay: 0.4 }}
            />
          </motion.g>
        )}

        {/* Alarm bell for reminding state */}
        {state === "reminding" && (
          <motion.g
            animate={{
              rotate: [-15, 15, -15],
              x: [-2, 2, -2],
            }}
            transition={{ duration: 0.15, repeat: Infinity }}
            style={{ originX: "155px", originY: "75px" }}
          >
            <circle cx="155" cy="75" r="12" fill={beakColour} />
            <circle cx="155" cy="75" r="9" fill="#d4903f" />
            <rect
              x="153"
              y="60"
              width="4"
              height="8"
              rx="2"
              fill={beakColour}
            />
            <motion.line
              x1="145"
              y1="68"
              x2="140"
              y2="62"
              stroke={beakColour}
              strokeWidth="2"
              strokeLinecap="round"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.3, repeat: Infinity }}
            />
            <motion.line
              x1="165"
              y1="68"
              x2="170"
              y2="62"
              stroke={beakColour}
              strokeWidth="2"
              strokeLinecap="round"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.3, repeat: Infinity, delay: 0.15 }}
            />
          </motion.g>
        )}

        {/* Waving speech bubble */}
        {state === "waving" && (
          <motion.g
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
          >
            {/* Bubble */}
            <rect
              x="150"
              y="42"
              width="40"
              height="24"
              rx="12"
              fill={bodyLight}
            />
            {/* Tail */}
            <polygon points="158,66 150,76 166,66" fill={bodyLight} />
            {/* Text */}
            <motion.text
              x="170"
              y="58"
              textAnchor="middle"
              fill={pupilColour}
              fontSize="12"
              fontWeight="bold"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Welcome!
            </motion.text>
          </motion.g>
        )}

        {/* Stars around for celebrating */}
        {state === "celebrating" && (
          <g>
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const x = 100 + Math.cos(rad) * 70;
              const y = 105 + Math.sin(rad) * 70;
              return (
                <motion.text
                  key={i}
                  x={x}
                  y={y}
                  fontSize="10"
                  fill="#FFD700"
                  textAnchor="middle"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.2, 0.5],
                    y: [y, y - 10, y],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                >
                  {"*"}
                </motion.text>
              );
            })}
          </g>
        )}
      </motion.g>
    </svg>
  );
}