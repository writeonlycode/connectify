import Image from "next/image";
import Link from "next/link";

import onboardingImage from "@/assets/images/joel-muniz-0QuIgOjLLXc-unsplash.png";
import onboardingFrame from "@/assets/images/onboarding-frame.png";

export default function ObboardingPage() {
  return (
  <div className="flex flex-col justify-center h-screen">
    <main className="flex flex-col w-full max-w-prose mx-auto bg-white shadow-sm rounded overflow-hidden">
      <div className="relative h-1/2 overflow-hidden">
        <Image src={onboardingImage} alt="Photo by Joel Muniz on Unsplash" className="max-h-96 object-cover object-botto object-center"/>
        <Image src={onboardingFrame} alt="Onboarding Frame" className="" fill />
      </div>
      <div className="flex flex-1 flex-col justify-center px-4 lg:px-8 my-10">
        <h1 className="text-4xl font-medium text-dark text-center mb-3">
          Let’s connect with each other!
        </h1>
        <p className="text-sm text-secondary text-center mb-10 px-8">
          Join us in shaping the future of social media. Sign up for Connectify
          now and be part of a community that values genuine connections and
          meaningful interactions. Your journey to new friendships and exciting
          possibilities starts here!
        </p>
        <Link
          className="block bg-gradient-to-b from-primary-300 to-primary-400 rounded text-sm text-white text-center font-medium px-10 py-5"
          href="/login"
        >
          Get started
        </Link>
      </div>
    </main>
  </div>
  );
}
