# Unexpected Behavior with Null Arguments in foo Function

This repository demonstrates a common JavaScript bug involving unexpected behavior when null values are passed as arguments to a function. The `foo` function, as initially written, silently returns without providing any error handling or alternative behavior when it encounters null arguments. This can lead to unpredictable results in the application.

The solution provided shows how to improve the function's robustness by explicitly handling null values with either a throw statement to explicitly signal an error, or by providing default values for null arguments.