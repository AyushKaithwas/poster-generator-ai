import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generate AI Poster",
  description: "The AI Poster Generator generates posters for your event.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  return <>{children}</>;
}
