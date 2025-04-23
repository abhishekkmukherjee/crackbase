"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const AuthForm = ({type}: {type:FormType}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  const isSign = type  === "sign-in";

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className=" flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="logo" height={32} width={38} />
          <h2 className="text-primary-100">CrackBase</h2>
        </div>
        <h3>Practice Job Interview with AI</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
    {!isSign && <p>Name</p>}
    <p>Email</p>
    <p>Password</p>

          <Button className="btn" type="submit">{isSign ? 'Sign in' : 'Create an account'}</Button>
        </form>
      </Form>

      <p className="text-center">
        {isSignIn ? "No account yet" : "Already have an account?"}
        <link href=""
      </p>
      </div>
    </div>
  );
};

export default AuthForm;
