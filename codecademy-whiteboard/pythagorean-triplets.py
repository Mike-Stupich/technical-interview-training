

def triplets(numlist):
    # Square and sort the list
    sqrd = list(map(lambda x: x ** 2, numlist))
    sqrd.sort()
    # For loop beginning at last element, and goes to 1st decrementing by 1 each time
    for i in range(len(sqrd)-1, 1, -1):
        # Set j to first element and k to element before i
        j = 0
        k = i-1
        # No need to check past each other, so only when j < k. Meet in middle approach
        while (j < k):
            # print(sqrd[i], sqrd[j], sqrd[k])
            # If pythagorean triplet found return true or whatever interviewer wants as ret
            if (sqrd[j] + sqrd[k] == sqrd[i]):
                return True
            # Else no triplet found
            else:
                # if a^2 + b^2 too small increase j
                if (sqrd[j] + sqrd[k] < sqrd[i]):
                    j = j + 1
                # else a^2 + b^2 too large already so decrease k
                else:
                    k = k - 1
    # no triplet found, return false
    return False


print(triplets([1, 5, 2, 3, 4, 6, 8]))
print(triplets([4]))

print(triplets([-3, 4, 5]))
# Is this okay? If interviewer were to ask to handle this, modify sqrd func

print(triplets(["a", "b", "c"]))
# Is this okay? Should I gracefully handle bad input like this?
