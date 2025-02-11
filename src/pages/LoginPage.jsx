import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const loginFormSchema = z.object({
  email: z.string().email('Your email has to be in a valid format'),
  password: z.string().min(8, 'Your password is under 8 characters'),
});

function LoginPage() {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginFormSchema),
    reValidateMode: 'onSubmit',
  });

  const [isChecked, setIsChecked] = useState(false);

  const validateEmail = (inputEmail) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(inputEmail);
  };

  const handleLogin = (values) => {
    const validPsswrd = values.password.length >= 8;
    if (!validateEmail(values.email)) {
      alert('Enter your email in the correct format');
      return;
    }

    if (!validPsswrd) {
      alert('Password must be 8 characters or more');
      return;
    }

    alert(`Pressed, ${values.email} ${values.password}`);
  };

  return (
    <main className="flex flex-col justify-center items-center h-[90vh] ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleLogin)}
          className="w-full max-w-sm"
        >
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Welcome Back!</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>ex. your@mail.com</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type={isChecked ? 'text' : 'password'}
                      />
                    </FormControl>
                    <FormDescription>
                      Password has to be 8 characters or more
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="show-password"
                  onCheckedChange={(checked) => setIsChecked(checked)}
                />
                <Label htmlFor="show-password">Show Password</Label>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex flex-col w-full space-y-4">
                <Button type="submit">Login</Button>
                <Button variant="link">Sign up instead</Button>
              </div>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </main>
  );
}

export default LoginPage;
