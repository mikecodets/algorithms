def every(fn, sequence):
    return all(fn(item) for item in sequence)


def is_even(num):
    return num % 2 == 0


print("Todos os números são pares?", every(is_even, [2, 4, 6, 8, 10]))
