#1
def min_value(a, b, c, d):
    smallest = a  

    if b < smallest:
        smallest = b
    if c < smallest:
        smallest = c
    if d < smallest:
        smallest = d

    return smallest

a, b, c, d = map(int, input().split())

print( min_value(a,b,c,d) )
#2
def power(x, n):
    result = 1
    for _ in range(n):
        result *= x
    return result

x, n = map(float, input().split())

print( power(x, int(n)) ) 
#3
def xor(a,b):
    return (a and not b) or (not a and b)

a,b = map(int , input().split())

print(int(xor(a,b)))