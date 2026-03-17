n = int(input())
a = input().split()
for i in range(n // 2):
    left_index = i
    right_index = n - 1 - i

    temp = a[left_index]
    a[left_index] = a[right_index]
    a[right_index] = temp

for element in a:
    print(element, end=" ")