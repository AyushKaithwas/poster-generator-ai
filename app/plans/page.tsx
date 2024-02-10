import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Plans() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-5 gap-24">
      <h1 className="font-semibold text-3xl">Buy Credits</h1>
      <div className="flex gap-16">
        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>Personal</CardTitle>
            <CardDescription>Best for personal use</CardDescription>
          </CardHeader>
          <CardContent>
            <p>20 Credits</p>
            <p>$5.00</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full font-black text-xl">Buy</Button>
          </CardFooter>
        </Card>
        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>Standard</CardTitle>
            <CardDescription>Best for standard use</CardDescription>
          </CardHeader>
          <CardContent>
            <p>40 Credits</p>
            <p>$9.00</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full font-black text-xl">Buy</Button>
          </CardFooter>
        </Card>
        <Card className="w-[300px]">
          <CardHeader>
            <CardTitle>Pro</CardTitle>
            <CardDescription>Best for bulk use</CardDescription>
          </CardHeader>
          <CardContent>
            <p>100 Credits</p>
            <p>$18.00</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-yellow-500 hover:bg-yellow-600 font-black text-xl">
              Buy
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
