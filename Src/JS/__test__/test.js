import {health, sortHealth} from '../basic.js';


test("basic test", () => {
    let result = 4;
    expect(result).toBe(4);
});

test("health test", () => {
    let result = health({name: 'Маг', health: 90});
    expect(result).toBe("healthy");
    result = health({name: 'Маг', health: 50});
    expect(result).toBe("wounded");
    result = health({name: 'Маг', health: 15});
    expect(result).toBe("critical");
});

test("health sort test", () => {
    let result = sortHealth([
      {name: 'мечник', health: 10},
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
      ]);

    expect(result).toEqual([
      {name: 'маг', health: 100},
      {name: 'лучник', health: 80},
      {name: 'мечник', health: 10},
    ]);
});

