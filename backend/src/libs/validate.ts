import { object, string, number, date, InferType, ValidationError } from "yup";
import { HTTPException } from "hono/http-exception";

interface ValidationResult {
  success: boolean;
  message: string;
}

async function validate(objectData: any, data: any) {
  try {
    return await object(objectData).validate(data);
  } catch (error) {
    if (error instanceof ValidationError) {
      const firstError = error.errors[0];

      throw new HTTPException(200, {
        message: "validate",
        cause: { code: -100, message: firstError },
      });
    }

    throw new HTTPException(200, {
      message: "validate",
      cause: { code: -100, message: "Unknown error occurred" },
    });
  }
}

export { validate, ValidationResult };
