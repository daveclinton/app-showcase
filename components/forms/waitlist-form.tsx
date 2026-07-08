"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";

type Status = { type: "success" | "error"; message: string } | null;

export function WaitlistForm() {
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/join-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to join the waitlist.");
      }

      form.reset();
      setStatus({ type: "success", message: result.message });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to join the waitlist.",
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {status ? (
        <Alert variant={status.type === "error" ? "destructive" : "default"}>
          {status.type === "success" ? <CheckCircle2 /> : null}
          <AlertTitle>
            {status.type === "success" ? "You are on the list" : "Something went wrong"}
          </AlertTitle>
          <AlertDescription aria-live="polite">
            {status.message}
          </AlertDescription>
        </Alert>
      ) : null}

      <FieldGroup>
        <Field data-disabled={pending || undefined}>
          <FieldLabel htmlFor="waitlist-name">Full name</FieldLabel>
          <Input
            id="waitlist-name"
            name="name"
            autoComplete="name"
            maxLength={120}
            placeholder="Your full name"
            required
            disabled={pending}
          />
        </Field>
        <Field data-disabled={pending || undefined}>
          <FieldLabel htmlFor="waitlist-email">Email address</FieldLabel>
          <Input
            id="waitlist-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            placeholder="you@example.com"
            required
            disabled={pending}
          />
          <FieldDescription>
            We respect your privacy and will never share your information.
          </FieldDescription>
        </Field>
      </FieldGroup>

      <Button type="submit" size="lg" disabled={pending}>
        {pending ? <Spinner data-icon="inline-start" /> : <Mail data-icon="inline-start" />}
        {pending ? "Joining..." : "Join the waitlist"}
      </Button>
    </form>
  );
}
