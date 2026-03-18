x = int(input())

x_str = str(x)
reversed_str = ""
for i in range(len(x_str) - 1, -1, -1):
    reversed_str += x_str[i]

reversed_num = int(reversed_str)
print(reversed_num)