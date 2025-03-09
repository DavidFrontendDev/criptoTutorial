import {
  CryptoCurrencyResponseSchema,
  CurrencySchema,
} from "../schema/crypto-schema";
import { z } from "zod";

export type Currency = z.infer<typeof CurrencySchema>;
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>;
