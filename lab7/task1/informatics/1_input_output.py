#1
from math import sqrt

a = int(input())
b = int(input())

print(sqrt(a*a + b*b))
#2
n = int(input())

print(f'The next number for the number {n} is {n+1}.')
print(f'The previous number for the number {n} is {n-1}.')
#3
schoolchildren = int(input())
apples = int(input())

print(apples//schoolchildren)
#4
schoolchildren = int(input())
apples = int(input())

print(apples%schoolchildren)
#5
velocity = int(input())
hours = int(input())

print( (velocity*hours) % 109)