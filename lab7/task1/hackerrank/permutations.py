from itertools import permutations

word , n = input().split()

perm = sorted ( list( permutations(word , int(n)) ) )

for tuple in perm:
    for j in tuple:
        print(j, end="")
    print()