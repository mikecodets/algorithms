interface VowelsCount {
  a: number;
  e: number;
  i: number;
  o: number;
  u: number;
}

function countInitialVowels(): VowelsCount {
  return { a: 0, e: 0, i: 0, o: 0, u: 0 };
}

function countVowels(phrase: string): VowelsCount {
  const vowels: string[] = ["a", "e", "i", "o", "u"];

  const initialVowels = countInitialVowels();

  return Array.from(phrase).reduce((vowelCount: VowelsCount, char: string) => {
    const lowerChar = char.toLowerCase();
    if (vowels.includes(lowerChar)) {
      vowelCount[lowerChar]++;
    }
    return vowelCount;
  }, initialVowels);
}

const phrase =
  "No que diz respeito ao empenho, ao compromisso, ao esforço, à dedicação, não existe meio termo. Ou você faz uma coisa bem feita ou não faz.";
console.log(countVowels(phrase));
