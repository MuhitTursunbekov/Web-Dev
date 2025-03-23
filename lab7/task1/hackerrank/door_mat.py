n , m = map(int, input().split())
for i in range(1,n ,2):
    dashes = (m-i*3)//2
    print("-"*dashes + ".|."*i + "-"*dashes)
    
first_welcome = (m-7) // 2
second_welcome = (m-7) - first_welcome

print("-"*first_welcome + "WELCOME" + "-"*second_welcome)


for i in range(n-2, 0 ,-2):
    dashes = (m-i*3)//2
    print("-"*dashes + ".|."*i + "-"*dashes)
    