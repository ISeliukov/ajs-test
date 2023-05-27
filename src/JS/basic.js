export default function sum(items) {
  let result = 0;
  for (const item of items) {
    result += item;
  }
  return result;
}

export function health(obj) {
  if (obj.health > 50) return 'healthy';
  else if (obj.health > 15) return 'wounded';
  else return 'critical';
}

export function sortHealth(arr) {
  const arrsort = arr.sort((a, b) => { return (parseFloat(b.health) - parseFloat(a.health)); });
  return arrsort;
}
