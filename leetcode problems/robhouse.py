#dynamic pro

from typing import List

class Solution:
    def rob(self, nums: List[int]) -> int:
        print(nums)

        num1 = 0
        num2 = 0

        for i in range(len(nums)-2):
            total = nums[i]+nums[i+2]
            print(total)



Solution().rob([1,3,8])
