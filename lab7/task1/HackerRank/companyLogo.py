from collections import Counter

s = input()
counts = Counter(s)

sorted_chars = sorted(counts.items(), key=lambda x: (-x[1], x[0]))

for i in range(3):
    print(sorted_chars[i][0], sorted_chars[i][1])