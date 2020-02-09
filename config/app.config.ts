const portNumber = process.env.PORT || 3000;

export const config = {
  portNumber,
  name: 'Coding Challenge - IBM',
  description: 'IBM Garage Melbourne',
  version: 'v1',
  enableMockResponse: true,
  disableEmail: true,
  hostURL: `http://localhost:${portNumber}`,
};
