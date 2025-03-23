#part:1 for 
#1
a = int(input())
b = int(input())

for i in range(a,b+1):
    if i%2==0:
        print(i, end=" ")
#2
a = int(input())
b = int(input())
c = int(input())
d = int(input())

for i in range(a, b+1):
    if i%d == c:
        print(i, end=" ")
#3
from math import isqrt

a = int(input())
b = int(input())

for i in range(a, b + 1):
    if isqrt(i) ** 2 == i:  
        print(i, end=" ")
#4
x = input()
d = input()

cnt = 0

for i in x:
    if i==d:
        cnt += 1

print(cnt)
#5
x = input()

sum = 0

for i in x:
    sum += int(i)

print(sum)
#6
x = input().lstrip('0')
x = x[::-1]
x = x.lstrip('0') 

print(x)
#7
x = int(input())

for i in range(2,x+1):
    if x%i==0:
        print(i)
        break
#8
x = int(input())

for i in range(1,x+1):
    if x%i==0:
        print(i, end=" ")
#9
x = int(input())
cnt = 0

for i in range(1, int(x**0.5) + 1):
    if x % i == 0:
        cnt += 1  
        if i != x // i: 
            cnt += 1

print(cnt)
#10
sum = 0

for i in range(100):
    x = int(input())
    sum += x

print(sum)
#11
n = int(input())

sum = 0

for i in range(n):
    x = int(input())
    sum += x

print(sum)
#12
x = input()
decimal = 0

for i in range(len(x)):  
    decimal += int(x[i]) * (2 ** (len(x) - 1 - i))  

print(decimal)
#13
n = int(input())

cnt = 0

for i in range(n):
    x = int(input())
    if x==0:
        cnt += 1
        
print(cnt)

# part2:while
#1
n = int(input())

i = 1
while i*i <= n : 
    print(i*i, end=" ")
    i+=1
#2
x = int(input())

i = 2
while i<=x:
    if x%i==0:
        print(i)
        break
    i+=1
#3
x = int(input())

i = 1

while 2**i <= x:
    print(2**i)
    i+=1
#4
x = int(input())

while x > 1:
    if x % 2 == 0:
        x //= 2 
    else:
        print("NO")
        break
else:
    print("YES") 
#5
x = int(input())

number = 1
power = 0

while number < x:
    number *= 2
    power+=1

print(power)
    