interface IMathOperations {
  addition(...args: number[]): number;
  subtraction(...args: number[]): number;
  multiplication(...args: number[]): number;
  division(...args: number[]): number;
}

class MathOperations implements IMathOperations {
  addition(...args: number[]): number {
    return args.reduce<number>((acc, curr) => acc + curr, 0);
  }

  subtraction(...args: number[]): number {
    if (args.length === 0) {
      throw new Error("A subtração requer pelo menos um argumento.");
    }
    return args.slice(1).reduce<number>((acc, curr) => acc - curr, args[0]);
  }

  multiplication(...args: number[]): number {
    return args.reduce<number>((acc, curr) => acc * curr, 1);
  }

  division(...args: number[]): number {
    if (args.length === 0) {
      throw new Error("A divisão requer pelo menos um argumento.");
    }
    if (args.some((arg) => arg === 0)) {
      throw new Error("A divisão por zero não é permitida.");
    }
    return args.slice(1).reduce<number>((acc, curr) => acc / curr, args[0]);
  }
}

const calculator = new MathOperations();

console.log(calculator.addition(2, 3, 5));
console.log(calculator.subtraction(10, 2, 3));
console.log(calculator.multiplication(2, 4, 3));
console.log(calculator.division(100, 5, 2));
