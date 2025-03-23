n = int(input())
lst = list(map(int, input().split()))
print(all(i>0 for i in lst) and any(str(j)==str(j)[::-1] for j in lst) )