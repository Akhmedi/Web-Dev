n = int(input())
numbers = input().split()
count = 0

for i in range(n):
    num = int(numbers[i])
    if num > 0:
        count = count + 1

print(count)