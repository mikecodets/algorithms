def reduce(fn, sequence, initial=None):
    iterator = iter(sequence)

    if initial is None:
        value = next(iterator)
    else:
        value = initial

    for element in iterator:
        value = fn(value, element)

    return value


def sum(a, b):
    return a + b


print(reduce(sum, [1, 2, 3, 4, 5]))
