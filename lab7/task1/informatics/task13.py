import math
a = int(input())
b = int(input())

start = int(math.sqrt(a))
end = int(math.sqrt(b))

for i in range(start, end+1):
    if (i*i >= a) and (i*i <= b):
        print(i * i)