def hello_name(name):
    return "Hello " + name + "!"

def make_abba(a, b):
    return a + b + b + a

def make_tags(tag, word):
    return "<" + tag + ">" + word + "</" + tag + ">"

def make_out_word(out, word):
    return out[:2] + word + out[2:]

def extra_end(str):
    return str[-2:] * 3

def first_two(str):
    if len(str) < 2:
        return str
    return str[:2]

def first_half(str):
    return str[:len(str)//2]

def without_end(str):
    return str[1:-1]

def combo_string(a, b):
    if len(a) < len(b):
        return a + b + a
    return b + a + b

def non_start(a, b):
    return a[1:] + b[1:]

def left2(str):
    return str[2:] + str[:2]

def right2(str):
    return str[-2:] + str[:-2]

def the_end(str, front):
    if front:
        return str[:1]
    return str[-1:]

def without_end2(str):
    return str[1:-1]

def middle_two(str):
    mid = len(str) // 2
    return str[mid-1:mid+1]

def two_char(str, index):
    if index < 0 or index > len(str)-2:
        return str[:2]
    return str[index:index+2]

def at_first(str):
    if len(str) < 2:
        return str + "@" * (2 - len(str))
    return str[:2]

def last_chars(a, b):
    return a[-1:] + b[-1:]