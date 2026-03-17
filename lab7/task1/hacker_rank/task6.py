_ = input()
set1 = set(map(int, input().split()))
_ = input()
set2 = set(map(int, input().split()))

diff = set1.symmetric_difference(set2)

for val in sorted(diff):
    print(val)