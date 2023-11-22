def some(fn, sequence):
    return any(fn(item) for item in sequence)


def is_even(num):
    return num % 2 == 0


print("Pelo menos um número é par?", some(is_even, [2, 4, 6, 8, 10]))
