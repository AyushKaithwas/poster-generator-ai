import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="flex flex-col items-center gap-10 justify-center min-h-[80vh] p-10">
      <h1 className="font-semibold text-3xl">Contact Us</h1>
      <Link href="mailto:ayush.91011@gmail.com" className="hover:text-primary">
        <p className="text-center ">ayush.91011@gmail.com</p>
      </Link>
    </div>
  );
}
