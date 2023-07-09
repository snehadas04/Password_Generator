import random
lower = "abcdefghijklmnopqrstuvwxyz"
upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
number = "0123456789"
symbol = "[]{}<>|()=_-@#$%?&*:;,"
join = lower + upper + number + symbol
length = 8
password = "".join(random.sample(join,length))
print("Password is : ",password)