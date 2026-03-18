x = int(input())
d = int(input())

count = 0
x_str = str(x)
for i in range(len(x_str)):
    if int(x_str[i]) == d:
        count += 1

print(count)