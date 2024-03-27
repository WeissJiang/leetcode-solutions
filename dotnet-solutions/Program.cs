using dotnet_solutions.Easy;

namespace dotnet_solutions
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Longest_Harmonious_Subsequence solution = new Longest_Harmonious_Subsequence();
            int[] nums = new int[] { 1, 3, 2, 2, 5, 2, 3, 7 };
            int result = solution.FindLHS(nums);
            Console.WriteLine(result);
        }
    }
}
