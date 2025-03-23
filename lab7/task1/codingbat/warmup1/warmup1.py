#1
def diff21(n):
  diff = abs(21-n)
  
  if n>21:
    diff *= 2
  
  return diff
#2
def front3(str):
  front = ""
  if len(str) < 3:
    front = str
  else:
    front = str[:3]
  
  return front*3
    
#3
def front_back(str):
  if len(str) <= 1:
    return str
  
  mid = str[1:len(str)-1] 
  
  return str[len(str)-1] + mid + str[0]
#4
def makes10(a, b):
  return a==10 or b==10 or a+b==10
#5
def missing_char(str, n):
  front = str[:n]   
  back = str[n+1:]  
  return front + back
#6
def monkey_trouble(a_smile, b_smile):
  return (a_smile == b_smile)
#7
def near_hundred(n):
  return ((abs(100 - n) <= 10) or (abs(200 - n) <= 10))
#8
def not_string(str):
  if str.startswith("not"):
    return str
  else:
    return "not " + str 
  

def not_string_2(str):
  if len(str) >= 3 and str[:3] == "not":
    return str
  return "not " + str

# str[:3] goes from the start of the string up to but not
# including index 3
#9
def parrot_trouble(talking, hour):
  return talking and (hour<7 or hour>20)
#10
def pos_neg(a, b, negative):
  if negative:
    return a<0 and b<0
  else:
    return (a<0 and b>0) or (a>0 and b<0)
#11
def sleep_in(weekday, vacation):
  return not weekday or vacation
#12
def sum_double(a, b):
  sum = a + b
  
  if a == b:
    sum *= 2
  return sum