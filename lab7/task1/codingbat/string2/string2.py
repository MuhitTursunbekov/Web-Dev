#1
def cat_dog(str):
  cat = 0
  dog = 0
  
  for i in range(len(str)-2):
    if str[i:i+3] == "cat":
      cat+=1
    elif str[i:i+3] == "dog":
      dog+=1
      
  
  return cat==dog
#2
def count_code(str):
  cnt = 0
  
  for i in range(len(str)-3):
    if str[i]=="c" and str[i+1]=="o" and str[i+3]=="e":
      cnt +=1
      
  return cnt


# def count_code(str):
#   import re
  
#   matches = re.findall(r'co.e',str)
  
#   return len(matches)
#3
def count_hi(str):
  cnt = 0
  for i in range(len(str)-1):
    if str[i:i+2] == "hi":
      cnt+=1
      
  return cnt
#4
def double_char(str):
  result = ""
  for i in str:
    result+=i*2
    
  return result
#5
def end_other(a, b):
  short = ""
  long = ""
  a_l = len(a)
  b_l = len(b)
  min_l = 0
  
  if a_l >= b_l:
    short = b.lower()
    min_l = b_l
    long = a.lower()
    
  else:
    short = a.lower()
    min_l = a_l
    long = b.lower()
    
  return long[-min_l:] == short
    
#6
def xyz_there(str):
  size = len(str)
  
  for i in range(size-2):
    if (i==0 or str[i-1]!=".") and str[i:i+3]=="xyz":
      return True
  return False