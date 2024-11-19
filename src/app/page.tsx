"use client"; // This marks the file as a client component

import Image from "next/image";
import { useEffect, useState } from "react";
import { ButtonLink, ButtonStyles } from '../components/Button';

// Function to calculate the Starfleet date
const calculateStarfleetDate = () => {
  const baseDate = new Date("1987-07-15T00:00:00Z").getTime(); // Base timestamp in milliseconds
  const currentDate = Date.now(); // Current timestamp in milliseconds
  const elapsedSeconds = (currentDate - baseDate) / 1000; // Elapsed time in seconds

  const formattedDate = (elapsedSeconds / 3155.76 + 410000) / 10;
  return formattedDate.toFixed(2); // Format to 2 decimal places
};

export default function Home() {
  // State to hold the calculated stardate
  const [starfleetDate, setStarfleetDate] = useState<string>("");

  // UseEffect hook to calculate the stardate when the component mounts
  useEffect(() => {
    const date = calculateStarfleetDate();
    setStarfleetDate(date);
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center sm:items-center">
        <Image
          className="dark"
          src="/assets/starfleet.png"
          alt="Starfleet Logo"
          width={280}
          height={38}
          priority
        />
        <p>Welcome to the Library and Computer Access Retrieval System</p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <ButtonLink path="">Access</ButtonLink>
          <ButtonLink path="" variant={ButtonStyles.SECONDARY}>Credits</ButtonLink>
        </div>
      </main>
      
      {/* Footer with the calculated Stardate */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a>Stardate: {starfleetDate}</a>
      </footer>
    </div>
  );
}
