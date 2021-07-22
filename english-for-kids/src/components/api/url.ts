// const port = 8080;
// const url = (endpoint: string) => `http://localhost:${port}/api/${endpoint}`;

export const urlServer = (endpoint: string): string =>
  `https://english-for-kids-greemrock.herokuapp.com/api/${endpoint}`;
