import { TYPE_DAEMON } from './Character';
import Range from './Range';

export default class Daemon extends Range {
  constructor(name) {
    super(name, TYPE_DAEMON, 10, 40);
  }
}
