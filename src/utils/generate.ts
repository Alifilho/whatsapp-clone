const randomNumber = (max: number) => Math.floor(Math.random() * max);

const randomColor = () =>
  `rgba(${randomNumber(256)}, ${randomNumber(256)}, ${randomNumber(256)}, 1)`;

export { randomNumber, randomColor };
