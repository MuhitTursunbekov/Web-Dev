#1
def array123(nums):
  for i in range(1,len(nums)-1):
    if (nums[i]==2 and nums[i-1]==1 and nums[i+1]==3):
      return True
  
  return False
      
#2
def array_count9(nums):
  cnt = 0
  
  for i in nums:
    if i == 9:
      cnt+=1
  
  return cnt
#3
def array_front9(nums):
  size = len(nums)
  upper = 4 if size > 4 else size
  
  for i in range(upper):
    if nums[i] == 9:
      return True
  
  return False
#4
def front_times(str,n):
  front = ""
  if len(str) < 3:
    front = str
  else:
    front = str[:3]
  
  return front*n
    
#5
def last2(str):
  if len(str) < 2:
    return 0
    
  cnt = 0
  last_two = str[-2:]
  for i in range(len(str)-2):
    if str[i:i+2]==last_two:
      cnt+=1
  
  return cnt
#6
def string_bits(str):
  new_str = ""
  for i in range(0,len(str),2):
    new_str += str[i]
    
  return new_str
#7
def string_match(a, b):
  cnt = 0
  min_len = min(len(a),len(b))
  
  for i in range(min_len-1):
    if a[i]==b[i] and a[i+1]==b[i+1]:
      cnt+=1
      
  return cnt
#8
def string_splosion(str):
  result = ""
  
  for i in range(1,len(str)+1):
    result += str[:i]
    
  return result
#9
def string_times(str, n):
  multiple_string = ""
  for i in range(n):
    multiple_string+=str
    
  return multiple_string