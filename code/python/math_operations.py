class MathOperations:
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def addition(self):
        return self.a + self.b

    def subtraction(self):
        return self.a - self.b

    def multiplication(self):
        return self.a * self.b

    def division(self):
        if self.b != 0:
            return self.a / self.b
        else:
            return "Não é possível dividir por zero."


operations = MathOperations(8, 4)

print("Adição:", operations.addition())
print("Subtração:", operations.subtraction())
print("Multiplicação:", operations.multiplication())
print("Divisão:", operations.division())
