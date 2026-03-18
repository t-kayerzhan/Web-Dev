t = int(input())

for _ in range(t):
    a_len = int(input())
    a = set(map(int, input().split()))
    b_len = int(input())
    b = set(map(int, input().split()))
    
    print(a.issubset(b))