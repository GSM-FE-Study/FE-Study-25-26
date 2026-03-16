function solution(s) {
  const words = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  let result = s;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const digit = String(i);

    const regex = new RegExp(word, 'g');

    result = result.replace(regex, digit);
  }

  return Number(result);
}
