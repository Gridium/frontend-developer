const cancelAnimationFrame  = jest.fn();
const requestAnimationFrame = jest.fn();

global.cancelAnimationFrame  = cancelAnimationFrame;
global.requestAnimationFrame = requestAnimationFrame;
