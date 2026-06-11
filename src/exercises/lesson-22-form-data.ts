export type RawSignup = {
  email: string;
  plan: string;
  updates?: string; // standard HTML checkbox value is "on" when checked
};

// TODO: Lowercase and trim the email, and convert updates value into boolean.
export function buildSignupPayload(fields: RawSignup) {
  return {
    email: fields.email,
    plan: fields.plan,
    updates: false,
  };
}
