from itertools import product

A = list(map(int, input().split()))
B = list(map(int, input().split()))

lst = list(product(A,B))

for i in lst:
    print(i , end=" ")