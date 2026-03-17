n = int(input())
a = input().split()
found = "NO"

for i in range(1, n):
    if int(a[i]) * int(a[i - 1]) > 0:
        found = "YES"

print(found)