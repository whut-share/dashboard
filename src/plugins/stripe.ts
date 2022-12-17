import { loadStripe as load, Stripe } from "@stripe/stripe-js";

let stripe: Stripe | null = null;

export const loadStripe = async () => {
  if (stripe) {
    return;
  }

  stripe = await load(process.env["VUE_APP_STRIPE_PK"] as string);
};

export function useStripe(): Stripe {
  if (!stripe) {
    throw new Error("Stripe not loaded");
  }

  return stripe;
}
