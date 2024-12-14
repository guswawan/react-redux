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

function LoginPage() {
  return (
    <main className="flex flex-col justify-center items-center h-[90vh] ">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Welcome Back!</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <div>
            <Label htmlFor='email'>Email</Label>
            <Input id='email' type="email"></Input>
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="Password"></Input>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="show-password" />
            <Label htmlFor="show-password">Show Password</Label>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex flex-col w-full space-y-4">
            <Button>Login</Button>
            <Button variant="link">Sign up instead</Button>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}

export default LoginPage;
