import {health, sortHealth} from '../basic.js';


test("basic test", () => {
    let result = 4;
    expect(result).toBe(4);
});

test("health test", () => {
    let result = health({name: '���', health: 90});
    expect(result).toBe("healthy");
    result = health({name: '���', health: 50});
    expect(result).toBe("wounded");
    result = health({name: '���', health: 15});
    expect(result).toBe("critical");
});

test("health sort test", () => {
    let result = sortHealth([
      {name: '������', health: 10},
      {name: '���', health: 100},
      {name: '������', health: 80},
      ]);

    expect(result).toEqual([
      {name: '���', health: 100},
      {name: '������', health: 80},
      {name: '������', health: 10},
    ]);
});

