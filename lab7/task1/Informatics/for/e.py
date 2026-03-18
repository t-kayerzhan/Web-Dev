x = int(input())

sum_digits = 0
x_str = str(x)
for i in range(len(x_str)):
    sum_digits += int(x_str[i])

print(sum_digits)