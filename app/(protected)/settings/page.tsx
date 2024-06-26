"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition, useState } from "react";
import { useSession } from "next-auth/react";

import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { SettingsSchema } from "@/schemas";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { settings } from "@/actions/settings";
import { Form, FormField, FormControl, FormItem, FormLabel, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCurrentUser } from "@/hooks/use-current-user";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { UserRole } from "@prisma/client";

const SettingsPage = () => {
  const user = useCurrentUser();

  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const { update } = useSession();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof SettingsSchema>>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      password: undefined,
      newPassword: undefined,
      name: user?.name || undefined,
      email: user?.email || undefined,
      role: user?.role || undefined,
      isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined
    }
  });

  const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
    startTransition(() => {
      settings(values)
        .then(data => {
          if (data.error) {
            setError(data.error);
          }

          if (data.success) {
            update();
            setSuccess(data.success);
          }
        })
        .catch(() => setError("Something went wrong!"));
    });
  };

  return (
    <div className="p-6 space-y-10">
      <div className="text-3xl font-medium">Settings</div>
      <div className="grid grid-cols-4">
        <div className="col-span-1">User Settings</div>
        <div className="col-span-3 border rounded-lg overflow-hidden">
          <div className="pt-6 space-y-4">
            <div className="text-xl px-6 font-medium">Payment</div>
            <div className="px-6">
              <Label htmlFor="payment_email">Payment Email</Label>
              <Input value={user?.email || ""} />
            </div>
            <div className="px-6 space-y-4">
              <div className="text-xl font-medium">Notifications</div>
              <div className="flex flex-row w-full space-x-2">
                <div className="mt-1">
                  <Checkbox className="data-[state=checked]:bg-indigo-500 data-[state=checked]:text-white border-gray-400" />
                </div>
                <div>
                  <div>Enable referral notification</div>
                  <div>Receive a notification a referral is generated</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-4">
              <Button className="bg-indigo-500 hover:bg-indigo-400">Save user settings</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <Card className="w-[600px] my-6 mx-auto">
    //   <CardHeader>
    //     <p className="text-2xl font-semibold text-center">⚙️ Settings</p>
    //   </CardHeader>
    //   <CardContent>
    //     <Form {...form}>
    //       <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
    //         <div className="space-y-4">
    //           <FormField
    //             control={form.control}
    //             name="name"
    //             render={({ field }) => (
    //               <FormItem>
    //                 <FormLabel>Name</FormLabel>
    //                 <FormControl>
    //                   <Input {...field} placeholder="John Doe" disabled={isPending} />
    //                 </FormControl>
    //                 <FormMessage />
    //               </FormItem>
    //             )}
    //           />
    //           {user?.isOAuth === false && (
    //             <>
    //               <FormField
    //                 control={form.control}
    //                 name="email"
    //                 render={({ field }) => (
    //                   <FormItem>
    //                     <FormLabel>Email</FormLabel>
    //                     <FormControl>
    //                       <Input {...field} placeholder="john.doe@example.com" type="email" disabled={isPending} />
    //                     </FormControl>
    //                     <FormMessage />
    //                   </FormItem>
    //                 )}
    //               />
    //               <FormField
    //                 control={form.control}
    //                 name="password"
    //                 render={({ field }) => (
    //                   <FormItem>
    //                     <FormLabel>Password</FormLabel>
    //                     <FormControl>
    //                       <Input {...field} placeholder="******" type="password" disabled={isPending} />
    //                     </FormControl>
    //                     <FormMessage />
    //                   </FormItem>
    //                 )}
    //               />
    //               <FormField
    //                 control={form.control}
    //                 name="newPassword"
    //                 render={({ field }) => (
    //                   <FormItem>
    //                     <FormLabel>New Password</FormLabel>
    //                     <FormControl>
    //                       <Input {...field} placeholder="******" type="password" disabled={isPending} />
    //                     </FormControl>
    //                     <FormMessage />
    //                   </FormItem>
    //                 )}
    //               />
    //               <FormField
    //                 control={form.control}
    //                 name="checkPassword"
    //                 render={({ field }) => (
    //                   <FormItem>
    //                     <FormLabel>Password Check</FormLabel>
    //                     <FormControl>
    //                       <Input {...field} placeholder="******" type="password" disabled={isPending} />
    //                     </FormControl>
    //                     <FormMessage />
    //                   </FormItem>
    //                 )}
    //               />
    //             </>
    //           )}
    //           <FormField
    //             control={form.control}
    //             name="role"
    //             render={({ field }) => (
    //               <FormItem>
    //                 <FormLabel>Role</FormLabel>
    //                 <Select disabled={isPending} onValueChange={field.onChange} defaultValue={field.value}>
    //                   <FormControl>
    //                     <SelectTrigger>
    //                       <SelectValue placeholder="Select a role" />
    //                     </SelectTrigger>
    //                   </FormControl>
    //                   <SelectContent>
    //                     <SelectItem value={UserRole.ADMIN}>Admin</SelectItem>
    //                     <SelectItem value={UserRole.USER}>User</SelectItem>
    //                   </SelectContent>
    //                 </Select>
    //                 <FormMessage />
    //               </FormItem>
    //             )}
    //           />
    //           {user?.isOAuth === false && (
    //             <FormField
    //               control={form.control}
    //               name="isTwoFactorEnabled"
    //               render={({ field }) => (
    //                 <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
    //                   <div className="space-y-0.5">
    //                     <FormLabel>Two Factor Authentication</FormLabel>
    //                     <FormDescription>Enable two factor authentication for your account</FormDescription>
    //                   </div>
    //                   <FormControl>
    //                     <Switch disabled={isPending} checked={field.value} onCheckedChange={field.onChange} />
    //                   </FormControl>
    //                 </FormItem>
    //               )}
    //             />
    //           )}
    //         </div>
    //         <FormError message={error} />
    //         <FormSuccess message={success} />
    //         <Button disabled={isPending} type="submit">
    //           Save
    //         </Button>
    //       </form>
    //     </Form>
    //   </CardContent>
    // </Card>
  );
};

export default SettingsPage;
