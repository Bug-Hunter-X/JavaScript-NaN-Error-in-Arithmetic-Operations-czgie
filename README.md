# JavaScript NaN Error in Arithmetic Operations

This repository demonstrates a common JavaScript error that leads to `NaN` (Not a Number) results during arithmetic operations. The error stems from attempting to perform arithmetic calculations with `null` values.  This can easily occur when dealing with user inputs or data received from external sources that might not always be properly validated.

The `bug.js` file shows the problematic code. The `bugSolution.js` file provides a solution using explicit type checking and handling of `null` values.

## Bug
The `foo` and `bar` functions illustrate this issue. When `null` is passed as an argument, the addition in `foo` results in `NaN`, which propagates through the calculation in `bar`, resulting in a `NaN` output.

## Solution
The solution involves adding checks to handle null or undefined values.  We use the nullish coalescing operator (`??`) to provide a default value (0 in this case) when the input is null or undefined, ensuring the calculation proceeds without error.

This demonstrates a simple yet crucial aspect of robust JavaScript programming: always handle potential unexpected input types to avoid runtime errors.