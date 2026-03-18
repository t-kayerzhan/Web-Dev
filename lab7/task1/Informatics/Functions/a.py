def min_of_four(a, b, c, d):
    return min(min(a, b), min(c, d))

# Основная часть программы
numbers = list(map(int, input().split()))
a, b, c, d = numbers[0], numbers[1], numbers[2], numbers[3]
print(min_of_four(a, b, c, d))