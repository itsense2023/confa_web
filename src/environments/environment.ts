const packageJson = require('../../package.json');

const HOST = 'http://confa-lb-ubuntu-178194802.us-east-1.elb.amazonaws.com';
//const HOST = 'http://127.0.0.1:8000'; host de prueba para ambiente de desarrollo

export const environment = {
  API_PUBLIC: HOST + '/',
  production: false,
  context: 'develop',
  version: packageJson.version,
};
