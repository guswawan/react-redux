import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

function LoginPage() {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const [inputEmailMessage, setInputEmailMessage] = useState('');
  const [inputPasswordMessage, setInputPasswordMessage] = useState('');

  const [isChecked, setIsChecked] = useState(false);

  const validateEmail = (inputEmail) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(inputEmail);
  };

  const handleLogin = () => {
    const validPsswrd = inputPassword.length >= 8;
    if (!validateEmail(inputEmail)) {
      alert('Enter your email in the correct format');
      return;
    }

    if (!validPsswrd) {
      alert('Password must be 8 characters or more');
      return;
    }

    alert(`Pressed, ${inputEmail} ${inputPassword}`);
  };

  return (
    <main className="flex flex-col justify-center items-center h-[90vh] ">
      <form onSubmit={handleLogin} className="w-full max-w-sm">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Welcome Back!</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@mail.com"
                onChange={(e) => {
                  if (!validateEmail(e.target.value) && e.target.value !== '') {
                    setInputEmailMessage(
                      'Enter your email in the correct format'
                    );
                  } else {
                    setInputEmailMessage('');
                  }

                  setInputEmail(e.target.value);
                }}
              ></Input>
              <p
                className={`${
                  !inputEmailMessage ? 'h-4 pt-1' : 'h-4'
                } text-xs text-muted-foreground-foreground`}
              >
                {inputEmailMessage}
              </p>
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type={isChecked ? 'text' : 'password'}
                placeholder="********"
                onChange={(e) => {
                  if (e.target.value.length > 0 && e.target.value.length < 8) {
                    setInputPasswordMessage(
                      'Password must be 8 characters or more'
                    );
                  } else {
                    setInputPasswordMessage('');
                  }

                  setInputPassword(e.target.value);
                }}
              ></Input>
              <p
                className={`${
                  inputPasswordMessage.length > 0 &&
                  inputEmailMessage.length < 8
                    ? 'h-4 pt-1'
                    : 'h-4'
                } text-xs text-muted-foreground-foreground`}
              >
                {inputPasswordMessage}
              </p>
            </div>
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
    </main>
  );
}

export default LoginPage;
