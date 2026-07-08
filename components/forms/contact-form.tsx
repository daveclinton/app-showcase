"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";

type Status = { type: "success" | "error"; message: string } | null;

export function ContactForm() {
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          enquiryType: formData.get("enquiryType"),
          message: formData.get("message"),
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message.");
      }

      form.reset();
      setStatus({ type: "success", message: result.message });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send your message.",
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
            {status.type === "success" ? "Message sent" : "Something went wrong"}
          </AlertTitle>
          <AlertDescription aria-live="polite">
            {status.message}
          </AlertDescription>
        </Alert>
      ) : null}

      <FieldGroup>
        <Field data-disabled={pending || undefined}>
          <FieldLabel htmlFor="contact-name">Name</FieldLabel>
          <Input
            id="contact-name"
            name="name"
            autoComplete="name"
            maxLength={120}
            placeholder="Your name"
            required
            disabled={pending}
          />
        </Field>
        <Field data-disabled={pending || undefined}>
          <FieldLabel htmlFor="contact-email">Email</FieldLabel>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            placeholder="you@example.com"
            required
            disabled={pending}
          />
        </Field>
        <Field data-disabled={pending || undefined}>
          <FieldLabel htmlFor="contact-enquiry">Type of enquiry</FieldLabel>
          <NativeSelect
            id="contact-enquiry"
            name="enquiryType"
            disabled={pending}
          >
            <NativeSelectOption value="">General enquiry</NativeSelectOption>
            <NativeSelectOption value="media">Press / media</NativeSelectOption>
            <NativeSelectOption value="partnership">
              Partnership
            </NativeSelectOption>
            <NativeSelectOption value="support">Support</NativeSelectOption>
          </NativeSelect>
        </Field>
        <Field data-disabled={pending || undefined}>
          <FieldLabel htmlFor="contact-message">Message</FieldLabel>
          <Textarea
            id="contact-message"
            name="message"
            rows={6}
            maxLength={5000}
            placeholder="How can we help?"
            required
            disabled={pending}
          />
        </Field>
      </FieldGroup>

      <Button type="submit" size="lg" disabled={pending}>
        {pending ? <Spinner data-icon="inline-start" /> : <Send data-icon="inline-start" />}
        {pending ? "Sending..." : "Send message"}
      </Button>
    </form>
  );
}
