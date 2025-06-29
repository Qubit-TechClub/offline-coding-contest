import React from "react";
import classNames from "classnames";

export function Card({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={classNames("rounded-2xl bg-white shadow-sm", className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={classNames("p-4", className)} {...props}>
      {children}
    </div>
  );
}
