export type ValidationResult = {
  isValid: boolean;
  errors: { email?: string; password?: string };
};

// TODO: Perform basic validation checks:
// - Email must contain '@' (error: "Invalid email address")
// - Password must be >= 6 characters (error: "Password must be at least 6 characters")
export function validateForm(fields: Record<string, string>): ValidationResult {
  return {
    isValid: true,
    errors: {},
  };
}
