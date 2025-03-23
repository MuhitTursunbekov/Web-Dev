#1
def combo_string(a, b):
  short = ""
  long = ""
  
  if len(a)>len(b):
    short = b
    long = a
  else:
    short = a
    long = b
    
  
  return short+long+short
#2
def extra_end(str):
  last2 = str[-2:]
  
  return last2*3
#3
def first_half(str):
  middle = len(str)//2
  
  return str[:middle]
#4
def first_two(str):
  if len(str)<=2:
    return str
  
  return str[:2]
#5 
def hello_name(name):
  return "Hello " + name + "!"
#6
def left2(str):
  if len(str)<=2:
    return str
    
  left_two = str[:2]
  rest = str[2:]
  
  return rest + left_two
#7
def make_abba(a, b):
  return a+b+b+a
#8
def make_out_word(out, word):
  open_brackets = out[:2]
  closed_brackets = out[2:]
  
  return open_brackets + word + closed_brackets
#9
def make_tags(tag, word):
  return "<{0}>{1}</{0}>".format(tag,word)
#10
def non_start(a, b):
  first = a[1:]
  second = b[1:]
  
  return first+second
#11
def without_end(str):
  return str[1:-1]