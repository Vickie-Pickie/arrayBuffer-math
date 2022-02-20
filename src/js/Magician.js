import { TYPE_MAGICIAN } from './Character';
import Range from './Range';

export default class Magician extends Range {
  constructor(name) {
    super(name, TYPE_MAGICIAN, 10, 40);
  }
}
