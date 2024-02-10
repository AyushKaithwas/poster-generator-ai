import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex items-center justify-between md:px-10 px-5 py-14 h-16 text-white w-full border-t border-t-primary">
      <Link className="hover:text-primary" href="/">
        <p>Poster Generator AI</p>
      </Link>
      <div className="flex md:flex-row flex-col md:gap-10">
        <Link href="/contactus">
          <p className="hover:text-primary">Contact Us</p>
        </Link>
        <Link href="/termsofservice">
          <p className="hover:text-primary">Terms of Service</p>
        </Link>
        <Link href="/privacypolicy">
          <p className="hover:text-primary">Privacy Policy</p>
        </Link>
        <Link href="/refundpolicy">
          <p className="hover:text-primary">Refund Policy</p>
        </Link>
      </div>
    </footer>
  );
}
