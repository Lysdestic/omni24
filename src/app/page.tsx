"use client"; // This marks the file as a client component

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  // State to hold the calculated stardate
  const [starfleetDate, setStarfleetDate] = useState<string>("");

  // Function to calculate the Starfleet date
  const calculateStarfleetDate = () => {
    const baseDate = new Date("1987-07-15T00:00:00Z").getTime(); // Base timestamp in milliseconds
    const currentDate = Date.now(); // Current timestamp in milliseconds
    const elapsedSeconds = (currentDate - baseDate) / 1000; // Elapsed time in seconds

    const formattedDate = (elapsedSeconds / 3155.76 + 410000) / 10;
    return formattedDate.toFixed(2); // Format to 2 decimal places
  };

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
          src="/starfleet.png"
          alt="Starfleet Logo"
          width={280}
          height={38}
          priority
        />
        <p>Welcome to the Library and Computer Access Retrieval System</p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Access
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Credits
          </a>
        </div>
      </main>
      
      {/* Footer with the calculated Stardate */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a>Stardate: {starfleetDate}</a>
      </footer>
    </div>
  );
}
