import { Character, TYPE_DAEMON, TYPE_MAGICIAN} from './Character';

export default class Range extends Character {
  constructor(name, type, attack, defence) {
    super(name, type, attack, defence);
    if (type !== TYPE_MAGICIAN && type !== TYPE_DAEMON) {
      throw new Error('Только маг и демон герои дальнего боя');
    }
  }

  set stoned(val) {
    this.isStoned = val;
  }

  get stoned() {
    return this.isStoned;
  }

  doAttack(x) {
    const newAttack = this.attack * ((100 - (x - 1) * 10) / 100);
    if (this.isStoned) {
      return newAttack - Math.log2(x) * 5;
    }
    return newAttack;
  }
}
