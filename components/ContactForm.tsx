"use client";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  role: string;
  message: string;
};

type FormErrors = Partial<FormData>;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Full name is required.";
  if (!data.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Enter a valid email address.";
  if (!data.phone.trim()) errors.phone = "Phone number is required.";
  else if (!/^[+\d\s\-()]{7,15}$/.test(data.phone)) errors.phone = "Enter a valid phone number.";
  if (data.role === "Select Your Query *") errors.role = "Please select a query category.";
  if (!data.message.trim()) errors.message = "Please tell us how we can help.";
  return errors;
}

const inputBase =
  "w-full rounded-xl border px-4 py-3.5 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue/20 bg-white";
const inputNormal = `${inputBase} border-slate-200 text-slate-700 placeholder-slate-400 focus:border-brand-blue/50`;
const inputError  = `${inputBase} border-red-300 bg-red-50/20 text-slate-800 placeholder-red-400 focus:border-red-400 focus:ring-red-100`;

export default function ContactForm() {
  const [data, setData] = useState<FormData>({
    name: "", email: "", phone: "", role: "Select Your Query *", message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setData((d) => ({ ...d, [field]: e.target.value }));
    if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(data);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    try {
      const id = process.env.NEXT_PUBLIC_FORMSPREE_ID;
      if (!id) throw new Error("Formspree ID not configured");
      const res = await fetch(`https://formspree.io/f/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, _subject: `Contact Enquiry from ${data.name}` }),
      });
      if (!res.ok) throw new Error("Failed to send message");
      setSent(true);
    } catch (err) {
      setErrors({ message: "Failed to send. Please try again or contact us via WhatsApp." });
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
        <div className="w-16 h-16 rounded-full bg-[#10B981]/10 flex items-center justify-center text-3xl text-[#10B981]">✅</div>
        <h3 className="font-display font-bold text-slate-800 text-lg">Message Sent!</h3>
        <p className="text-sm text-slate-500 max-w-xs">
          Thanks for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => { setSent(false); setData({ name: "", email: "", phone: "", role: "Select Your Query *", message: "" }); }}
          className="border-2 border-slate-200 text-slate-600 font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-slate-50 transition-colors mt-2"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="flex flex-col gap-1">
          <input
            id="cf-name"
            value={data.name}
            onChange={set("name")}
            placeholder="Full Name *"
            className={errors.name ? inputError : inputNormal}
            aria-describedby={errors.name ? "cf-name-err" : undefined}
          />
          {errors.name && <p id="cf-name-err" className="text-xs text-red-500 ml-1">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <input
            id="cf-phone"
            value={data.phone}
            onChange={set("phone")}
            placeholder="Phone Number *"
            className={errors.phone ? inputError : inputNormal}
            aria-describedby={errors.phone ? "cf-phone-err" : undefined}
          />
          {errors.phone && <p id="cf-phone-err" className="text-xs text-red-500 ml-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <input
          id="cf-email"
          type="email"
          value={data.email}
          onChange={set("email")}
          placeholder="Email Address *"
          className={errors.email ? inputError : inputNormal}
          aria-describedby={errors.email ? "cf-email-err" : undefined}
        />
        {errors.email && <p id="cf-email-err" className="text-xs text-red-500 ml-1">{errors.email}</p>}
      </div>

      {/* Query Dropdown */}
      <div className="flex flex-col gap-1">
        <select
          id="cf-role"
          value={data.role}
          onChange={set("role")}
          className={errors.role ? `${inputError} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7%209l3%203%203-3%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px_20px] bg-[right_16px_center] bg-no-repeat` : `${inputNormal} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7%209l3%203%203-3%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px_20px] bg-[right_16px_center] bg-no-repeat`}
          aria-describedby={errors.role ? "cf-role-err" : undefined}
        >
          <option value="Select Your Query *" disabled className="text-slate-400">Select Your Query *</option>
          <option value="Admission / Courses Enquiry">Admission / Courses Enquiry</option>
          <option value="School Program / STEM Lab">School Program / STEM Lab</option>
          <option value="Workshop / Summer Camp Setup">Workshop / Summer Camp Setup</option>
          <option value="DIY Kits & Products">DIY Kits & Products</option>
          <option value="Franchise Opportunity">Franchise Opportunity</option>
          <option value="Other Queries">Other Queries</option>
        </select>
        {errors.role && <p id="cf-role-err" className="text-xs text-red-500 ml-1">{errors.role}</p>}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1">
        <textarea
          id="cf-message"
          rows={4}
          value={data.message}
          onChange={set("message")}
          placeholder="Message *"
          className={errors.message ? inputError : inputNormal}
          aria-describedby={errors.message ? "cf-msg-err" : undefined}
        />
        {errors.message && <p id="cf-msg-err" className="text-xs text-red-500 ml-1">{errors.message}</p>}
      </div>

      {errors.message && errors.message.includes("Failed to send") && (
        <p className="text-xs text-red-500 text-center font-medium">{errors.message}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 bg-[#16A34A] hover:bg-[#15803D] disabled:bg-slate-400 text-white font-extrabold text-sm rounded-xl flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 shadow-md transition-all duration-300 cursor-pointer disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
            </svg>
            <span>Sending…</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
