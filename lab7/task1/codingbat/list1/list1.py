#1 
def common_end(a, b):
  first = a[0] == b[0]
  last = a[len(a)-1] == b[len(b)-1]
  
  return first or last

#2 
def first_last6(nums):
  return nums[0]==6 or nums[len(nums)-1]==6

#3 
def has23(nums):
  return nums[0]==2 or nums[1]==2 or nums[0]==3 or nums[1]==3

#4
def make_ends(nums):
  if len(nums) == 1:
    return [nums[0]]*2
  else:
    return [nums[0], nums[len(nums)-1] ]

#5
def make_pi():
  return [3,1,4]

#6
def max_end3(nums):
  if nums[0]>nums[2]:
    return [nums[0]]*3
  else:
    return [nums[2]]*3

#7
def middle_way(a, b):
  return [a[1], b[1] ]

#8
def reverse3(nums):
  return [ nums[2] , nums[1] , nums[0] ]

#9
def rotate_left3(nums):
  return [ nums[1] , nums[2] , nums[0] ]

#10
def sum2(nums):
  if len(nums)==0:
    return 0
  elif len(nums)==1:
    return nums[0]
  else:
    return nums[0] + nums[1]

#11
def sum3(nums):
  return nums[0] + nums[1] + nums[2]
