export default {
  jump: new KeyboardEvent('keydown', { key: 'Space', keyCode: 32 }),
  crounch: new KeyboardEvent('keydown', { key: 'ArrowDown', keyCode: 40 }),
  dispatch(event) {
    document.dispatchEvent(this[event]);
  }
}
