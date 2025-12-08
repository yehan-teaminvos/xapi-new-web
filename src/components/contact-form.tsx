"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MoveRight } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const formSchema = z.object({
  fname: z
    .string()
    .nonempty({ message: "First name is required" })
    .refine((val) => !/^\d+$/.test(val), {
      message: "First name cannot be only numbers",
    }),
  lname: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address." }),
  mnumber: z
    .string()
    .nonempty({ message: "Mobile number is required" })
    .regex(/^\d{10}$/, { message: "Enter a valid 10-digit mobile number" }),
  msg: z.string().nonempty({ message: "Message is required" }),
  subject: z.string().nonempty({ message: "Subject is required" }),
});

export default function ContactForm() {
  // const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fname: "",
      lname: "",
      email: "",
      mnumber: "",
      subject: "",
      msg: "",
    },
  });

  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  function onSubmit(values: z.infer<typeof formSchema>) {
    setShowSuccess(true);
    console.log(values);
    form.reset();
    setTimeout(() => setShowSuccess(false), 10000);
  }
  return (
    <div>
      {showSuccess && (
        <div className="mb-4 absolute top-0 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-md">
          <AlertDialog
            open={showSuccess}
            onOpenChange={(open) => setShowSuccess(open)}
          >
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Form Submitted</AlertDialogTitle>
                <AlertDialogDescription>
                  Your message has been submitted successfully. Our team will
                  get back to you shortly.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction className="bg-gradient-to-r from-tertiary via-secondary to-primary  rounded-[5px] cursor-pointer px-10.5 py-2.5  text-white">
                  OK
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-2 md:col-span-1">
              <FormField
                control={form.control}
                name="fname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-artegra-sans-alt-semibold text-dark text-base ">
                      First Name <span className="text-red-500  -ml-1">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className=" py-6 sm:py-8 px-6 mt-1 bg-dark-light  placeholder:text-secondary-dark placeholder:text-sm placeholder:font-helvetica border-none"
                        placeholder="Enter your first name"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <FormField
                control={form.control}
                name="lname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-artegra-sans-alt-semibold text-dark text-base">
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="py-6 sm:py-8 px-6 mt-1 bg-dark-light border-none placeholder:text-secondary-dark placeholder:text-sm placeholder:font-helvetica"
                        placeholder="Enter your last name"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-artegra-sans-alt-semibold text-dark text-base">
                      Email <span className="text-red-500 -ml-1">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="py-6 sm:py-8 px-6 mt-1 bg-dark-light border-none placeholder:text-secondary-dark placeholder:text-sm placeholder:font-helvetica"
                        placeholder="Enter your email address"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <FormField
                control={form.control}
                name="mnumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-artegra-sans-alt-semibold text-dark text-base">
                      Mobile Number{" "}
                      <span className="text-red-500 -ml-1">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="py-6 sm:py-8 px-6 mt-1 bg-dark-light border-none placeholder:text-secondary-dark placeholder:text-sm placeholder:font-helvetica"
                        placeholder="Enter your mobile number"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-2">
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-artegra-sans-alt-semibold text-dark text-base">
                      Subject <span className="text-red-500 -ml-1">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="py-6 sm:py-8 px-6 mt-1 bg-dark-light border-none placeholder:text-secondary-dark placeholder:text-sm placeholder:font-helvetica"
                        placeholder="Enter your inquiry/contact subject"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-2">
              <FormField
                control={form.control}
                name="msg"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-artegra-sans-alt-semibold text-dark text-base">
                      Message <span className="text-red-500  -ml-1">*</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your message"
                        className="resize-none h-40 py-6 px-6 mt-1 bg-dark-light border-none placeholder:text-secondary-dark placeholder:text-sm placeholder:font-helvetica"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="col-span-2 flex justify-end">
            <button
              type="submit"
              className="group flex group duration-200 items-center gap-x-3 font-helvetica font-bold text-lg bg-gradient-to-r from-tertiary via-secondary to-primary  rounded-[5px] cursor-pointer px-10.5 py-2.5  text-white  "
            >
              <p>Submit</p>
              <MoveRight className="w-0 group-hover:w-5 duration-200" />
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
}
