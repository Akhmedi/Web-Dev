def xor(x,y):
    if x != y:
        return 1
    else:
        return 0

nums = input().split()
x = int(nums[0])
y = int(nums[1])

print(xor(x,y))