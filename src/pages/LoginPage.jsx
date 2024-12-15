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
  const [isChecked, setIsChecked] = useState(false);

  const handleLogin = () => {
    alert(`Pressed, ${inputEmail} ${inputPassword}`);
  };

  return (
    <main className="flex flex-col justify-center items-center h-[90vh] ">
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
              onChange={(e) => setInputEmail(e.target.value)}
            ></Input>
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type={isChecked ? 'text' : 'password'}
              onChange={(e) => setInputPassword(e.target.value)}
            ></Input>
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
            <Button onClick={handleLogin}>Login</Button>
            <Button variant="link">Sign up instead</Button>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}

export default LoginPage;
