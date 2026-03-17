x = int(input())
count = 0
d = 1
while d * d <= x:
    if x % d == 0:
        if d * d == x:
            count = count + 1
        else:
            count = count + 2
    d = d + 1
print(count)