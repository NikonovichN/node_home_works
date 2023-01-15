export const forgotMessage = (value: string): string =>
  `Bad request! You forgot to enter ${value}!`;

export const badRequestCallback = (res: any, message: string): void =>
  res.status(400).send(message);
