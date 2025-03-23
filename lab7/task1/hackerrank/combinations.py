from itertools import combinations

word, n = input().split()
n = int(n)

word = sorted(word)

for i in range(1, n + 1):
    for comb in combinations(word, i):
        print("".join(comb))