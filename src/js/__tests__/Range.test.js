import Range from '../Range';
import { TYPE_MAGICIAN, TYPE_ZOMBIE } from '../Character';

test('Персонаж ближнего боя не может быть дальником', () => {
  expect(() => new Range('Ivan', TYPE_ZOMBIE, 25, 30)).toThrowError(Error);
});

test('Персонаж с правильными параметрами успешно создается', () => {
  const hero = new Range('Ivan', TYPE_MAGICIAN, 10, 20);
  expect(hero.name).toBe('Ivan');
  expect(hero.type).toBe(TYPE_MAGICIAN);
  expect(hero.level).toEqual(1);
  expect(hero.attack).toEqual(10);
  expect(hero.defence).toEqual(20);
  expect(hero.health).toEqual(100);
});

const attackTestCases = [];
for (let i = 1; i < 11; i += 1) {
  attackTestCases.push([100, i, 100 - (i - 1) * 10]);
}
test.each(attackTestCases)(
  'Персонаж не под дурманом с атакой %i бьет по клетке %i с уроном %i',
  (attack, x, expected) => {
    const hero = new Range('Ivan', TYPE_MAGICIAN, attack, 20);
    const received = hero.doAttack(x);
    expect(received).toEqual(expected);
  },
);

test.each([
  [100, 1, 100],
  [100, 2, 85],
  [100, 4, 60],
  [100, 8, 15]
])(
  'Персонаж под дурманом с атакой %i бьет по клетке %i с уроном %i',
  (attack, x, expected) => {
    const hero = new Range('Ivan', TYPE_MAGICIAN, attack, 20);
    hero.stoned = true;
    const received = hero.doAttack(x);
    expect(received).toEqual(expected);
  },
);
