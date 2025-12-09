// "use client";
import EmployeeQual from "./(pages)/employee-qual/EmployeeQual";

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/employee-qual', {
  cache: 'no-store'
  });
  const data = await res.json();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex min-h-screen w-full flex-col bg-white">
          <EmployeeQual
            ranks={data.ranks}
            categories={data.categories}
            qualeList={data.qualeList}
            positions={data.positions}
            departments={data.departments}
            employees={data.employees}
            qualeRecords={data.qualeRecords}
          />
      </main>
    </div>
  );
}
