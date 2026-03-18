import re

n = int(input())

for _ in range(n):
    line = input()
    
    while ' && ' in line:
        line = line.replace(' && ', ' and ')
    
    while ' || ' in line:
        line = line.replace(' || ', ' or ')
    
    print(line)