#1
def big_diff(nums):
  return max(nums)-min(nums)

#2
def centered_average(nums):
  nums.remove(max(nums))
  nums.remove(min(nums))
  
  return sum(nums) // len(nums)

#3
def count_evens(nums):
  cnt = 0
  for i in nums:
    if i%2==0:
      cnt+=1
  return cnt

#4
def has22(nums):
  for i in range(len(nums)-1):
    if nums[i]==2 and nums[i+1]==2:
      return True
  return False

#5
def sum13(nums):
  sum = 0 
  
  for i in range(len(nums)):
    if nums[i]==13 or (i!=0 and nums[i-1]==13):
      continue
    
    sum+=nums[i]
    
  return sum

#6
def sum67(nums):
  sum = 0
  
  is_six = False
  
  for i in nums:
    if i==6:
      is_six = True
    elif i==7 and is_six:
      is_six = False
      continue
      
    if is_six:
      continue
    
    sum+=i
    
  return sum
    
    