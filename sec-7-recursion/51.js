/**
 * Helper Method Recursion
 * - Design pattern commonly used with Recursion
 */

function outer(input) {
    var outerScopedVariable = []

    function helper(helperInput) {
        // modify the outerScopedVariable
        helper(helperInput--)
    }

    helper(input)

    return outerScopedVariable
}

// Another Example: Let's collect all of the odd values in an array!
function collectOddValues(arr) {
    let result = [];

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }

        helper(helperInput.slice(1));
    }

    helper(arr);

    return result;
}