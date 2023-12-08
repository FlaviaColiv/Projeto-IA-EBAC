import utils from './utils.js'
import RNA from './RNA.js'
import controls from './controls.js'

const SAMPLES = 20
const game = Runner.instance_;
let dinoList = []
let dinoIndex = 0

let bestScore = 0;
let bestRNA = null;

function fillDinoList () {
  for (let i = 0; i < SAMPLES; i++) {
    dinoList[i] = new RNA(3, [10, 10, 2])
    dinoList[i].load(bestRNA)
    if (i > 0) dinoList[i].mutate(0.5)
  }
  console.log('Lista de Dinossauros criada!')
}