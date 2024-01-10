"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, subject, message }),
    }).then(() => {
      router.push("/");
    });
  };

  return (
    <section>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="blue_gradient mb-4 text-4xl tracking-tight font-extrabold text-center">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-black-500 dark:text-black-400 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-black-900 dark:text-black-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="shadow-sm bg-black-50 border border-black-300 text-black-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-black-900 dark:text-black-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              onChange={(e) => setSubject(e.target.value)}
              className="block p-3 w-full text-sm text-black-900 bg-black-50 rounded-lg border border-black-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-black-900 dark:text-black-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              onChange={(e) => setMessage(e.target.value)}
              className="block p-2.5 w-full text-sm text-black-900 bg-black-50 rounded-lg shadow-sm border border-black-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800
            outline_btn"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
