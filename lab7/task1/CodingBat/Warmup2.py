def sleep_in(weekday, vacation):
    return (not weekday or vacation)

def diff21(n):
    if n <= 21:
        return 21 - n
    else:
        return (n - 21) * 2

def near_hundred(n):
    return ((abs(100 - n) <= 10) or (abs(200 - n) <= 10))

def missing_char(str, n):
    front = str[:n]
    back = str[n+1:]
    return front + back

def monkey_trouble(a_smile, b_smile):
    return (a_smile == b_smile)

def parrot_trouble(talking, hour):
    return (talking and (hour < 7 or hour > 20))

def pos_neg(a, b, negative):
    if negative:
        return (a < 0 and b < 0)
    else:
        return ((a < 0 and b > 0) or (a > 0 and b < 0))

def front_back(str):
    if len(str) <= 1:
        return str
    mid = str[1:len(str)-1]
    return str[len(str)-1] + mid + str[0]

def sum_double(a, b):
    sum = a + b
    if a == b:
        sum = sum * 2
    return sum

def string_times(str, n):
    result = ""
    for i in range(n):
        result = result + str
    return result

def string_splosion(str):
    result = ""
    for i in range(len(str)):
        result = result + str[:i+1]
    return result

def array_front9(nums):
    end = len(nums)
    if end > 4:
        end = 4
    
    for i in range(end):
        if nums[i] == 9:
            return True
    return False

def front_times(str, n):
    front_len = 3
    if front_len > len(str):
        front_len = len(str)
    front = str[:front_len]
    
    result = ""
    for i in range(n):
        result = result + front
    return result

def last2(str):
    if len(str) < 2:
        return 0
    
    last2 = str[len(str)-2:]
    count = 0
    
    for i in range(len(str)-2):
        sub = str[i:i+2]
        if sub == last2:
            count = count + 1

    return count

def array123(nums):
    for i in range(len(nums)-2):
        if nums[i]==1 and nums[i+1]==2 and nums[i+2]==3:
            return True
    return False