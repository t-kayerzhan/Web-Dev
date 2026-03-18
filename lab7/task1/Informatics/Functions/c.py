def xor(x, y):
    return (x and not y) or (not x and y)

# Основная часть программы
x, y = map(int, input().split())
result = xor(bool(x), bool(y))
print(int(result))