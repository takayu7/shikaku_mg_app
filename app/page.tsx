"use client";
import EmployeeQual from "./(pages)/employee-qual/EmployeeQual";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full flex-col bg-white">
          <EmployeeQual />
      </main>
    </div>
  );
}
