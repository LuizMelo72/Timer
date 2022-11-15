import { Timer } from "./timer.js"
import { Controls } from "./controls.js"
import Sound from "./sounds.js"

import { buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
  minutesDisplay,
  secondsDisplay } from "./elements.js"

import Events from "./events.js"

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
  })

const sound = Sound()

Events({timer, controls, sound})
