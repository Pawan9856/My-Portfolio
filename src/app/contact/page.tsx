"use client";

import React, { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import Lottie from "lottie-react";
import EmailLoading from "@/assets/email-loading.json";
import ContactPerson from "@/assets/contact-person.json";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [action, setAction] = useState<boolean>(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAction(true);
    if (
      !process.env.NEXT_PUBLIC_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_PUBLIC_KEY
    ) {
      return;
    }
    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          form.current,
          process.env.NEXT_PUBLIC_PUBLIC_KEY
        )
        .then(
          () => {
            if (form.current) form.current.reset();
            console.log("Email sent successfully");
            setAction(false);
            toast.success("Email sent successfully!");
          },
          (error) => {
            console.log(error);
            setAction(false);
            toast.error("Error sending email. Please try again later.");
          }
        );
    }
  };

  return (
    <>
      <AlertDialog open={action} onOpenChange={setAction}>
        <AlertDialogContent className="w-[300px] md:w-full">
          <Lottie animationData={EmailLoading} />
        </AlertDialogContent>
      </AlertDialog>

      <div className="grid grid-cols-12 justify-items-center w-full py-10 px-5 md:px-10  ">
        <div className="w-full h-full col-span-6 hidden lg:flex justify-center ">
          <Lottie animationData={ContactPerson} className="w-full h-[600px]" />
        </div>
        <div className="max-w-[650px] col-span-12 lg:col-span-6 w-full p-10 bg-slate-50 rounded-lg shadow-md">
          <h1 className="text-2xl text-mySecondaryColor mb-3 font-bold">Get In Touch</h1>
          <p className="text-sm text-mySecondaryColor/80 mb-4">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible{" "}
          </p>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex gap-5 flex-col text-mySecondaryColor text-lg"
          >
            <div className="">
              <Label htmlFor="name" className="font-semibold">Name</Label>
              <Input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                className="bg-slate-100 "
                name="sender_name"
              />
            </div>
            <div className="">
              <Label htmlFor="email" className="font-semibold">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                className="bg-slate-100 "
                name="sender_email"
              />
            </div>
            <div className="">
              <Label htmlFor="message" className="font-semibold">Message</Label>
              <Textarea
                id="message"
                placeholder="Enter Your Message Here..."
                className="bg-slate-100 h-36 resize-none"
                name="message"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="py-3 hover:scale-105 transition-all duration-300 font-semibold w-full rounded-lg bg-myExtraColor text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
