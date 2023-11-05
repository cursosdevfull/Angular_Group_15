import environment from '../../../assets/config-files/environment.json';

export class Environment {
  getEnvironment() {
    return environment.env;
  }
}
