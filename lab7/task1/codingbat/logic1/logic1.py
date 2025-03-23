#1
def alarm_clock(day, vacation):
  if vacation:
    if 1<=day<=5:
      return "10:00"
    else:
      return "off"
  else:
    if 1<=day<=5:
      return "7:00"
    else:
      return "10:00"

#2
def caught_speeding(speed, is_birthday):
  additional = 5 if is_birthday else 0
  
  if speed<=60+additional:
    return 0
  elif 61+additional<=speed<=80+additional:
    return 1
  elif speed>=81+additional:
    return 2

#3
def cigar_party(cigars, is_weekend):
  return 40<=cigars<=60 or (is_weekend and cigars>=40)

#4
def date_fashion(you, date):
  if you<=2 or date<=2:
    return 0
  elif you>=8 or date>=8:
    return 2
  else:
    return 1

#5
def in1to10(n, outside_mode):
  if outside_mode:
    return n<=1 or n>=10
  else:
    return 1<=n<=10

#6
def love6(a, b):
  return a==6 or b==6 or a+b==6 or abs(a-b)==6

#7
def near_ten(num):
  lst = [0,1,2,8,9]
  return num%10 in lst

#8
def sorta_sum(a, b):
  if 10<= a+b <= 19:
    return 20
  else:
    return a+b

#9
def squirrel_play(temp, is_summer):
  upper = 100 if is_summer else 90
  
  return 60<=temp<=upper