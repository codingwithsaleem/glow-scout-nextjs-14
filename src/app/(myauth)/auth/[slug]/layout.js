import "@/app/globals.css";
import { Toaster } from "@/components/ui/toaster";
import localFont from "next/font/local";
import { Raleway } from "next/font/google";
import dynamic from "next/dynamic";

const ReduxProvider = dynamic(
  () => import('@/app/ReduxProvider'),
  { ssr: false }
);

const RalewayThin = Raleway({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-raleway-thin",
});
const valky = localFont({
  src: [
    {
      path: "../../../../../public/fonts/ValkyRegular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-valky",
});

const raleway = localFont({
  src: [
    {
      path: "../../../../../public/fonts/Raleway-Regular.ttf",
      weight: "300",
    },
  ],
  variable: "--font-raleway",
});

export const metadata = {
  title: "Glow Scout",
  description:
    "Glow Scout is a beauty and wellness platform that connects you to the best spas and salons in your area. Book your next appointment with Glow Scout.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${valky.variable} ${raleway.variable} ${RalewayThin.variable} font-sans`}
    >
      <body>
        <ReduxProvider>
          {children}
          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
