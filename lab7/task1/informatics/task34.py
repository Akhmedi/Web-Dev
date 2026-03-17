n = int(input())
a = input().split()
count = 0

for i in range(1, n - 1):
    current = int(a[i])
    left = int(a[i - 1])
    right = int(a[i + 1])

    if current > left and current > right:
        count = count + 1

print(count)