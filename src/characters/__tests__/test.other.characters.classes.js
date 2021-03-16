import Magician from '../Magician';
import Bowerman from '../Bowerman';
import Swordsman from '../Swordsman';
import Daemon from '../Daemon';
import Undead from '../Undead';
import Zombie from '../Zombie';

it('Создание персонажа класса Magician', () => {
  expect(new Magician('Dude')).toEqual({
    _name: 'Dude',
    _type: 'Magician',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  });
});

it('Создание персонажа класса Bowerman', () => {
  expect(new Bowerman('Dude')).toEqual({
    _name: 'Dude',
    _type: 'Bowerman',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  });
});

it('Создание персонажа класса Swordsman', () => {
  expect(new Swordsman('Dude')).toEqual({
    _name: 'Dude',
    _type: 'Swordsman',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  });
});

it('Создание персонажа класса Daemon', () => {
  expect(new Daemon('Dude')).toEqual({
    _name: 'Dude',
    _type: 'Daemon',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  });
});

it('Создание персонажа класса Undead', () => {
  expect(new Undead('Dude')).toEqual({
    _name: 'Dude',
    _type: 'Undead',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  });
});

it('Создание персонажа класса Zombie', () => {
  expect(new Zombie('Dude')).toEqual({
    _name: 'Dude',
    _type: 'Zombie',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  });
});
