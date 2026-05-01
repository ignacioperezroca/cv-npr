import "react";

declare module "react" {
  interface HTMLAttributes<T> {
    animate?: unknown;
    transition?: unknown;
  }
}

