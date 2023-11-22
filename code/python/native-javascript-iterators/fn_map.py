def map(fn, sequence):
    return [fn(item) for item in sequence]


def double(x):
    return x * 2


print(map(double, [1, 2, 3, 4, 5]))
