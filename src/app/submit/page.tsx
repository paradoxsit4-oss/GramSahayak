
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  Droplets,
  Trash2,
  Waves,
  Send,
  MapPin,
  User,
  Phone,
  FileText,
  CheckCircle2,
} from "lucide-react";

export default function SubmitComplaint() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("Water Supply");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("English");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name || !phone || !location || !description) {
      alert("Please fill in all required fields.");
      return;
    }

    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#f5f8f5] px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-3xl">

        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-green-700"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        <div className="mb-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
            <FileText size={14} />
            CITIZEN SERVICES
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Submit a Complaint
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
            Report a problem in your village. Our AI-powered system will
            analyse your complaint and help route it to the responsible
            Panchayat officer.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-2xl border border-green-200 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
              <CheckCircle2 size={34} />
            </div>

            <h2 className="text-2xl font-bold text-gray-900">
              Form completed!
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              Your complaint form is ready. Actual complaint submission
              and tracking will be connected to the backend in a later step.
            </p>

            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 rounded-xl bg-green-700 px-6 py-3 text-sm font-semibold text-white hover:bg-green-800"
            >
              Submit Another Complaint
            </button>

            <div className="mt-4">
              <Link href="/" className="text-sm font-semibold text-green-700">
                Return to Dashboard
              </Link>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-7 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8"
          >
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Citizen Information
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Tell us who is reporting this issue.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <User size={16} />
                  Full Name *
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                  <Phone size={16} />
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter mobile number"
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
              </div>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h2 className="text-lg font-bold text-gray-900">
                Complaint Details
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Describe the issue you are facing.
              </p>
            </div>

            <div>
              <label className="mb-3 block text-sm font-semibold text-gray-700">
                Select Complaint Category *
              </label>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  {
                    name: "Water Supply",
                    icon: Droplets,
                    description: "Water shortage or leakage",
                  },
                  {
                    name: "Sanitation",
                    icon: Trash2,
                    description: "Waste or garbage issues",
                  },
                  {
                    name: "Drainage",
                    icon: Waves,
                    description: "Blocked drains or flooding",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  const active = category === item.name;

                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setCategory(item.name)}
                      className={`rounded-xl border p-4 text-left transition ${
                        active
                          ? "border-green-600 bg-green-50 ring-2 ring-green-100"
                          : "border-gray-200 hover:border-green-300"
                      }`}
                    >
                      <Icon
                        size={23}
                        className={active ? "text-green-700" : "text-gray-500"}
                      />
                      <p className="mt-3 text-sm font-bold text-gray-900">
                        {item.name}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        {item.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                <MapPin size={16} />
                Complaint Location *
              </label>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Village, ward number, street or landmark"
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Preferred Language
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-green-600"
              >
                <option>English</option>
                <option>Hindi</option>
                <option>Kannada</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Describe Your Problem *
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Explain the problem, when it started, and how it affects your area..."
                required
                rows={5}
                className="w-full resize-y rounded-xl border border-gray-200 px-4 py-3 text-sm leading-6 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
              <p className="mt-2 text-xs text-gray-400">
                You can describe your complaint in your preferred language.
              </p>
            </div>

            <div className="rounded-xl bg-green-50 p-4">
              <p className="text-sm font-semibold text-green-900">
                What happens next?
              </p>
              <p className="mt-1 text-xs leading-5 text-green-800">
                AI agents will classify the complaint, identify its urgency,
                research relevant information, and prepare an action for the
                responsible officer.
              </p>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-4 text-sm font-bold text-white shadow-sm transition hover:bg-green-800"
            >
              <Send size={17} />
              Submit Complaint
            </button>

            <p className="text-center text-xs text-gray-400">
              * Required fields
            </p>
          </form>
        )}

        <p className="mt-6 text-center text-xs text-gray-400">
          GramSahayak · Making village governance smarter
        </p>
      </div>
    </main>
  );
}
