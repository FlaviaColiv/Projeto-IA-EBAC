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

setTimeout(() => {
  fillDinoList()
  controls.dispatch('jump')
}, 1000)

setInterval(() => {
  if (!game.activated) return;

  const dino = dinoList[dinoIndex];

  if (game.crashed) {
    if(dino.score > bestScore) {
      bestScore = dino.score;
      bestRNA = dino.save();
      console.log('Melhor Pontuação: ', bestScore);
    }
    dinoIndex++;

  if (dinoIndex === SAMPLES) {
    fillDinoList();
    dinoIndex = 0;
    bestScore = 0;
  }
  game.restart();
}

 const {tRex, horizon, currentSpeed, distanceRan, dimensions} = game;
 dino.score = distanceRan - 2000;

 const player = {
  x: tRex.xPos,
  y: tRex.yPos,
  speed: currentSpeed
 };

 const [obstacle] = horizon.obstacles
    .map((obstacle) => {
    return {
      x: obstacle.xPos,
      y: obstacle.yPos
    }
  })
    .filter((obstacle) => obstacle.x > player.x)

    if (obstacle) {
      const distance = 1 - (utils.getDistance(player, obstacle) / dimensions.WIDTH);
      const speed = player.speed / 6;
      const height = Math.tanh(105 - obstacle.y)

      const [jump, crounch] = dino.compute([
        distance,
        speed,
        height
      ]);

      if (jump === crounch) return;
      if (jump) controls.dispatch('jump'); // Se for verdadeiro o dinossauro pula
      if (crounch) controls.dispatch('crounch');
    };
}, 100);

/* const s = document.createElement('scrept');
s.type = 'module';
s.src = 'http://localhost:5500/script.js'
document.body.appendChild(s); */