#1
def close_far(a, b, c):
  if abs(a-b)<=1:
    if abs(a-c)>=2 and abs(b-c)>=2:
      return True
    return False
  
  elif abs(a-c)<=1:
    if abs(a-b)>=2 and abs(b-c)>=2:
      return True
    return False
  
  else:
    return False
#2
def lone_sum(a, b, c):
  if a==b and a==c:
    return 0
  elif a==b:
    return c
  elif a==c:
    return b
  elif b==c:
    return a
  else:
    return a+b+c
#3
def lucky_sum(a, b, c):
  if a==13:
    return 0
  elif b==13:
    return a
  elif c==13:
    return a+b
  else:
    return a+b+c
#4
def make_bricks(small, big, goal):
  big_num = goal//5 if goal//5 <= big else big
  
  goal -= big_num*5
  
  return goal<=small
#5
def make_chocolate(small, big, goal):
  big_num = goal//5 if big>=goal//5 else big
  
  goal -= big_num * 5
  
  return (goal if goal<=small else -1)
#6
def fix_teen(n):
  if 13<=n<=14 or 17<=n<=19:
    return 0
  else:
    return n

def no_teen_sum(a, b, c):
  return fix_teen(a)+fix_teen(b)+fix_teen(c)
  
#7
def round10(num):
  if 0<=num%10<=4:
    return num - (num%10)
  else:
    return num - (num%10) + 10


def round_sum(a, b, c):
  return round10(a) + round10(b) + round10(c)
  