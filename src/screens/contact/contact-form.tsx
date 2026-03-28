"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { useSendEmail } from "./api/hooks";
import { useEffect } from "react";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  company: z.string().min(2, "Company name is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(500, "Message must be under 500 characters"),
});

export function ContactForm() {
  const { mutate: sendEmail, isPending, isSuccess, error } = useSendEmail();

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof contactSchema>) {
    sendEmail(data);
  }

  useEffect(() => {
    if (error) {
      toast.error(error?.message);
    }
  }, [error]);

  useEffect(() => {
    if (isSuccess) {
      form.reset();
    }
  }, [isSuccess, form]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Send Us a Message</CardTitle>
        <CardDescription>
          We’d love to hear from you. Fill out the form below.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup className="grid md:grid-cols-2">
            {/* Full Name */}
            <Controller
              name="fullName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Full Name *</FieldLabel>
                  <Input
                    {...field}
                    placeholder="John Doe"
                    aria-invalid={fieldState.invalid}
                    disabled={isPending}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Email */}
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Email Address *</FieldLabel>
                  <Input
                    {...field}
                    type="email"
                    placeholder="john@example.com"
                    aria-invalid={fieldState.invalid}
                    disabled={isPending}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Phone */}
            <Controller
              name="phone"
              control={form.control}
              render={({ field }) => (
                <Field>
                  <FieldLabel>Phone Number</FieldLabel>
                  <Input
                    {...field}
                    placeholder="+1 (555) 123-4567"
                    disabled={isPending}
                  />
                </Field>
              )}
            />

            {/* Company */}
            <Controller
              name="company"
              control={form.control}
              render={({ field }) => (
                <Field>
                  <FieldLabel>Company Name</FieldLabel>
                  <Input
                    {...field}
                    placeholder="Your Company"
                    disabled={isPending}
                  />
                </Field>
              )}
            />

            {/* Subject */}
            <Controller
              name="subject"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  data-invalid={fieldState.invalid}
                  className="md:col-span-2"
                >
                  <FieldLabel>Subject *</FieldLabel>
                  <Input
                    {...field}
                    placeholder="Sales Inquiry / Support / Partnership"
                    aria-invalid={fieldState.invalid}
                    disabled={isPending}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Message */}
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  data-invalid={fieldState.invalid}
                  className="md:col-span-2"
                >
                  <FieldLabel>Message *</FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      rows={6}
                      className="min-h-28 resize-none"
                      placeholder="Tell us about your solar panel recycling needs..."
                      aria-invalid={fieldState.invalid}
                      disabled={isPending}
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText className="tabular-nums">
                        {field.value.length}/500
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter>
        <Button
          type="submit"
          form="contact-form"
          disabled={isPending}
          className="w-full"
        >
          Send Message
        </Button>
      </CardFooter>
    </Card>
  );
}
