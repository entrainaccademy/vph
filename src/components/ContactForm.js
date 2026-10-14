"use client";

import { useState } from "react";
import { site, whatsappLink } from "@/config/site";
import Button from "./Button";
import { WhatsAppIcon } from "./Icons";

const initialValues = {
  name: "",
  shop: "",
  phone: "",
  area: "",
  role: "",
  message: "",
  // Honeypot: hidden from people, often filled in by bots.
  website: "",
};

const roles = ["Retailer", "Brand", "Other"];

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  const digits = values.phone.replace(/\D/g, "");
  const local = digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits;
  if (!/^[6-9]\d{9}$/.test(local)) {
    errors.phone = "Please enter a valid 10-digit mobile number.";
  }
  if (!values.role) {
    errors.role = "Please choose one option.";
  }
  return errors;
}

function buildWhatsAppMessage(values) {
  const lines = ["Hello VPH Enterprises, I have an enquiry."];
  if (values.name.trim()) lines.push(`Name: ${values.name.trim()}`);
  if (values.shop.trim()) lines.push(`Shop/Company: ${values.shop.trim()}`);
  if (values.phone.trim()) lines.push(`Phone: ${values.phone.trim()}`);
  if (values.area.trim()) lines.push(`Area/Town: ${values.area.trim()}`);
  if (values.role) lines.push(`I am a: ${values.role}`);
  if (values.message.trim()) lines.push(`Message: ${values.message.trim()}`);
  return lines.join("\n");
}

const inputClass =
  "block min-h-12 w-full border-0 border-b bg-transparent px-0 py-2.5 text-base text-white placeholder:text-white/45 focus:border-gold-light";

function fieldClass(hasError) {
  return `${inputClass} ${hasError ? "border-red-300" : "border-white/40"}`;
}

function ErrorText({ id, children }) {
  if (!children) return null;
  return (
    <p id={id} className="mt-2 text-sm font-medium text-red-300">
      {children}
    </p>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  // idle | submitting | success | error | unconfigured
  const [status, setStatus] = useState("idle");

  const { endpoint, accessKey } = site.form;

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) {
      setErrors((errs) => ({ ...errs, [name]: undefined }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    const nextErrors = validate(values);
    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      form.querySelector(`[name="${firstInvalid}"]`)?.focus();
      setStatus("idle");
      return;
    }

    // Bot filled the honeypot: pretend it worked, send nothing.
    if (values.website) {
      setStatus("success");
      setValues(initialValues);
      return;
    }

    if (!endpoint) {
      setStatus("unconfigured");
      return;
    }

    setStatus("submitting");
    try {
      const payload = {
        name: values.name.trim(),
        shop: values.shop.trim(),
        phone: values.phone.trim(),
        area: values.area.trim(),
        role: values.role,
        message: values.message.trim(),
        subject: `New website enquiry from ${values.name.trim()}`,
        from_name: "VPH Enterprises website",
      };
      if (accessKey) payload.access_key = accessKey;

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === false) {
        throw new Error("Request failed");
      }
      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
    }
  }

  function handleWhatsApp() {
    window.open(
      whatsappLink(buildWhatsAppMessage(values)),
      "_blank",
      "noopener,noreferrer",
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      aria-describedby="form-note"
      className="relative h-full rounded-4xl bg-navy p-6 text-white sm:p-9"
    >
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Contact</h2>
      <p id="form-note" className="mt-2 text-sm text-white/70">
        Fields marked <span aria-hidden="true">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>

      <div className="mt-6 grid gap-x-6 gap-y-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-white/80">
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={handleChange}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass(errors.name)}
          />
          <ErrorText id="name-error">{errors.name}</ErrorText>
        </div>

        <div>
          <label htmlFor="shop" className="text-sm font-medium text-white/80">
            Shop/Company name
          </label>
          <input
            id="shop"
            name="shop"
            type="text"
            autoComplete="organization"
            value={values.shop}
            onChange={handleChange}
            className={fieldClass(false)}
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-white/80">
            Phone <span aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="e.g. 98765 43210"
            required
            value={values.phone}
            onChange={handleChange}
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={fieldClass(errors.phone)}
          />
          <ErrorText id="phone-error">{errors.phone}</ErrorText>
        </div>

        <div>
          <label htmlFor="area" className="text-sm font-medium text-white/80">
            Area/Town
          </label>
          <input
            id="area"
            name="area"
            type="text"
            autoComplete="address-level2"
            value={values.area}
            onChange={handleChange}
            className={fieldClass(false)}
          />
        </div>
      </div>

      <fieldset
        className="mt-5"
        aria-describedby={errors.role ? "role-error" : undefined}
      >
        <legend className="text-sm font-medium text-white/80">
          I am a <span aria-hidden="true">*</span>
        </legend>
        <div className="mt-2 flex flex-wrap gap-3">
          {roles.map((role) => (
            <label
              key={role}
              className={`inline-flex min-h-11 cursor-pointer items-center gap-3 rounded-full border px-4 text-white has-checked:border-gold-light has-checked:bg-gold-light has-checked:text-navy ${
                errors.role ? "border-red-300" : "border-white/40"
              }`}
            >
              <input
                type="radio"
                name="role"
                value={role}
                checked={values.role === role}
                onChange={handleChange}
                required
                className="size-5 accent-navy"
              />
              <span>{role}</span>
            </label>
          ))}
        </div>
        <ErrorText id="role-error">{errors.role}</ErrorText>
      </fieldset>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-medium text-white/80">
          Message <span className="font-normal text-white/55">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          className={fieldClass(false)}
        />
      </div>

      {/* Honeypot field, hidden from people and assistive tech. */}
      <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={handleChange}
        />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button
          type="submit"
          disabled={submitting}
          onDark
          className="disabled:cursor-wait disabled:opacity-70 sm:flex-1"
        >
          {submitting ? "Sending…" : "Send enquiry"}
        </Button>
        <Button variant="secondaryOnDark" onDark icon={WhatsAppIcon} onClick={handleWhatsApp}>
          Send on WhatsApp
          <span className="sr-only"> (opens in a new tab)</span>
        </Button>
      </div>

      <div aria-live="polite" role="status" className="mt-5 empty:hidden">
        {status === "success" && (
          <p className="rounded-lg border border-green-700 bg-green-50 p-4 text-green-900">
            <strong>Thank you!</strong> Your enquiry has been sent. Our team
            will get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="rounded-lg border border-red-700 bg-red-50 p-4 text-red-900">
            <strong>Sorry, something went wrong.</strong> Please try again, call
            us on{" "}
            <a href={site.phone.href} className="font-semibold underline">
              {site.phone.display}
            </a>{" "}
            or use the &ldquo;Send on WhatsApp&rdquo; button.
          </p>
        )}
        {status === "unconfigured" && (
          <p className="rounded-lg border border-gold bg-cream p-4 text-navy">
            <strong>Online enquiries are not available just yet.</strong>{" "}
            Please use the &ldquo;Send on WhatsApp&rdquo; button to send these
            details, or call us on{" "}
            <a href={site.phone.href} className="font-semibold underline">
              {site.phone.display}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
