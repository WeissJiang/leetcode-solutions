using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace dotnet_solutions.Easy
{
    public class Longest_Harmonious_Subsequence
    {
        public int FindLHS(int[] nums)
        {
            Dictionary<int, int> map = new Dictionary<int, int>();
            int max = 0;
            foreach (int num in nums)
            {
                if (!map.ContainsKey(num))
                {
                    map.Add(num, 0);
                }
                map[num]++;
                if (map.ContainsKey(num + 1))
                {
                    max = Math.Max(max, map[num] + map[num + 1]);
                }
                if (map.ContainsKey(num - 1))
                {
                    max = Math.Max(max, map[num] + map[num - 1]);
                }
            }
            return max;
        }   
    }
}
