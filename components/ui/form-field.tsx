import * as React from "react";
import { cn } from "@/lib/utils";

type FormFieldProps = {
  label?: string;
  htmlFor?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
};

/**
 * FormField — wrapper que agrupa Label + Control + mensaje de error/hint.
 * Úsalo con Input, Textarea, Select, Checkbox, Switch, etc.
 *
 * @example
 * <FormField label="Email" error={errors.email?.message} required>
 *   <Input type="email" id="email" {...register("email")} />
 * </FormField>
 */
function FormField({
  label,
  htmlFor,
  error,
  hint,
  required,
  className,
  children,
}: FormFieldProps) {
  const id = htmlFor ?? React.useId();

  // Clona el hijo y le inyecta el id + aria-describedby si hay error/hint
  const describedBy = [
    error ? `${id}-error` : null,
    hint ? `${id}-hint` : null,
  ]
    .filter(Boolean)
    .join(" ");

  const child = React.Children.only(children) as React.ReactElement<
    React.HTMLAttributes<HTMLElement> & { id?: string; "aria-describedby"?: string }
  >;

  const clonedChild = React.cloneElement(child, {
    id: child.props.id ?? id,
    "aria-describedby": describedBy || undefined,
    "aria-invalid": error ? true : undefined,
  } as React.HTMLAttributes<HTMLElement>);

  return (
    <div data-slot="form-field" className={cn("flex flex-col gap-1.5", className)}>
      {label && (
        <label
          htmlFor={child.props.id ?? id}
          className="text-sm font-semibold text-gray-700 leading-none select-none"
        >
          {label}
          {required && (
            <span aria-hidden="true" className="ml-1 text-red-500">
              *
            </span>
          )}
        </label>
      )}

      {clonedChild}

      {hint && !error && (
        <p id={`${id}-hint`} className="text-xs text-gray-500 leading-relaxed">
          {hint}
        </p>
      )}

      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="flex items-center gap-1 text-xs font-medium text-red-600"
        >
          <svg
            aria-hidden="true"
            className="size-3 shrink-0"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm.75 9.5h-1.5v-1.5h1.5v1.5zm0-3h-1.5V4.5h1.5V7.5z" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

export { FormField };
