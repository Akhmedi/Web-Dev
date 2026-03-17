n = int(input())
s = set(map(int, input().split()))
num_commands = int(input())

for _ in range(num_commands):
    command = input().split()
    cmd_name = command[0]

    if cmd_name == "pop":
        s.pop()
    else:
        arg = int(command[1])
        getattr(s, cmd_name)(arg)

print(sum(s))