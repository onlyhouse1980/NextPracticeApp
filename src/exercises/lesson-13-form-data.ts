export type SignupFields = {
  email: string;
  plan: "free" | "pro";
  updates?: "on";
};

export type SignupPayload = {
  email: string;
  plan: "free" | "pro";
  updates: boolean;
};

// TODO: Normalize the email and convert the checkbox value into a boolean.
export function buildSignupPayload(fields: SignupFields): SignupPayload {
  return {
    email: fields.email,
    plan: fields.plan,
    updates: false,
  };
}
