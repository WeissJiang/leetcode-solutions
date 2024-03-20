using System;
using System.Collections.Generic;

namespace Testdome_dotnet_questions
{
    public class BoatMovements
    {
        public static bool CanTravelTo(bool[,] gameMatrix, int fromRow, int fromColumn, int toRow, int toColumn)
        {
            int rows = gameMatrix.GetLength(0);
            int cols = gameMatrix.GetLength(1);

            if (fromRow < 0 || fromRow >= rows || fromColumn < 0 || fromColumn >= cols ||
                toRow < 0 || toRow >= rows || toColumn < 0 || toColumn >= cols ||
                !gameMatrix[fromRow, fromColumn] || !gameMatrix[toRow, toColumn])
            {
                return false;
            }

            if (fromRow != toRow && fromColumn != toColumn)
            {
                return false;
            }

            if (fromRow == toRow)
            {
                if (fromColumn > toColumn && fromColumn - toColumn > 1) return false;

                else if (toColumn > fromColumn && toColumn - fromColumn > 2) return false;

                int small = Math.Min(fromColumn, toColumn);
                int big = Math.Max(fromColumn, toColumn);
                for (int i = small + 1; i < big; i++)
                {
                    if (!gameMatrix[fromRow, i])
                    {
                        return false;
                    }
                }
            }

            if (fromColumn == toColumn)
            {
                if (fromRow > toRow && fromRow - toRow > 1) return false;

                else if (toRow > fromRow && toRow - fromRow > 1) return false;

                int small = Math.Min(fromRow, toRow);
                int big = Math.Max(fromRow, toRow);
                for (int i = small + 1; i < big; i++)
                {
                    if (!gameMatrix[i, fromColumn])
                    {
                        return false;
                    }
                }
            }

            return true;
        }

        public static void Run()
        {
            bool[,] gameMatrix =
            {
                {false, true,  true,  false, false, false},
                {true,  true,  true,  false, false, false},
                {true,  true,  true,  true,  true,  true},
                {false, true,  true,  false, true,  true},
                {false, true,  true,  true,  false, true},
                {false, false, false, false, false, false},
            };

            Console.WriteLine(CanTravelTo(gameMatrix, 3, 2, 2, 2)); // true, Valid move
            Console.WriteLine(CanTravelTo(gameMatrix, 3, 2, 3, 4)); // false, Can't travel through land
            Console.WriteLine(CanTravelTo(gameMatrix, 3, 2, 6, 2)); // false, Out of bounds
        }
    }
}
