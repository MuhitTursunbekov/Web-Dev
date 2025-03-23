#1
a = int(input())
b = int(input())

if a >= b:
    print(a)
else:
    print(b)
#2
year = int(input())

if (year%4==0 and year%100!=0) or year%400==0 :
    print("YES")
else:
    print("NO")
#3
system = int(input())
student = int(input())

if (system == 1 and student!=1) or (system!=1 and student==1):
    print("NO")
else:
    print("YES")

#4
num = float(input())

if num > 0:
    print(1)
elif num < 0:
    print(-1)
else:
    print(0)
#5
a = int(input())
b = int(input())

if a > b:
    print(1)
elif b > a:
    print(2)
else:
    print(0)