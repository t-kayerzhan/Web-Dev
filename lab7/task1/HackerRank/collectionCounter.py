from collections import Counter

n = int(input().strip())
shoes = Counter(map(int, input().strip().split()))
m = int(input().strip())

total = 0
for _ in range(m):
    size, price = map(int, input().strip().split())
    if shoes[size] > 0:
        total += price
        shoes[size] -= 1

print(total)