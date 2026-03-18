k = int(input())
rooms = list(map(int, input().split()))

room_counts = {}
for room in rooms:
    if room in room_counts:
        room_counts[room] += 1
    else:
        room_counts[room] = 1

for room, count in room_counts.items():
    if count == 1:
        print(room)
        break