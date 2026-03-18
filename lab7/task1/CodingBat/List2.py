def count_evens(nums):
    count = 0
    for num in nums:
        if num % 2 == 0:
            count += 1
    return count

def sum13(nums):
    total = 0
    i = 0
    while i < len(nums):
        if nums[i] == 13:
            i += 2
        else:
            total += nums[i]
            i += 1
    return total

def big_diff(nums):
    return max(nums) - min(nums)

def sum67(nums):
    total = 0
    in_six = False
    for num in nums:
        if num == 6:
            in_six = True
        elif in_six and num == 7:
            in_six = False
        elif not in_six:
            total += num
    return total

def centered_average(nums):
    return (sum(nums) - min(nums) - max(nums)) // (len(nums) - 2)

def has22(nums):
    for i in range(len(nums)-1):
        if nums[i] == 2 and nums[i+1] == 2:
            return True
    return False