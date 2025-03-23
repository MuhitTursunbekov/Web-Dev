#1
# n = int(input())
# lst = [int(input()) for _ in range(n)]  

# print(*lst[::2], sep=" ") 


n = int(input())  
lst = list(map(int, input().split())) 

print(*lst[::2]) 

#2
n = int(input())  
lst = list(map(int, input().split())) 

for i in lst:
    if i%2==0:
        print(i, end=" ")
#3
n = int(input())  
lst = list(map(int, input().split())) 

cnt = 0

for i in lst:
    if i > 0:
        cnt+=1

print(cnt)
#4
n = int(input())  
lst = list(map(int, input().split())) 

cnt = 0

for i in range(1, len(lst)):
    if lst[i] > lst[i-1]:
        cnt += 1

print(cnt)
#5
def sign(num):
    if num > 0:
        return 1
    elif num < 0:
        return -1
    else:
        return 0

n = int(input())  
lst = list(map(int, input().split())) 

same_sign = False


for i in range(1, len(lst)):
    if sign(lst[i]) == sign(lst[i-1]):
        same_sign = True
        break

if same_sign:
    print("YES")
else:
    print("NO")
#6
n = int(input())  
lst = list(map(int, input().split())) 

cnt = 0

for i in range(1, len(lst)-1):
    if lst[i]>lst[i-1] and lst[i]>lst[i+1]:
        cnt+=1

print(cnt)
#7
n = int(input())
lst = list(map(int, input().split()))
size = len(lst)


for i in range(size//2):
    temp = lst[i]
    lst[i] = lst[size-i-1]
    lst[size-i-1] = temp

for i in lst:
    print(i,end=" ")