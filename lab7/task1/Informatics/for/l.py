binary = input()

decimal = 0
length = len(binary)
for i in range(length):
    digit = int(binary[i])
    power = length - 1 - i
    decimal += digit * (2 ** power)

print(decimal)