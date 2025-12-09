import Employees from "./Employees";

// 動的レンダリングを強制
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  
  try {
    const res = await fetch(`${baseUrl}/api/employee-qual`, {
      cache: 'no-store',
      next: { revalidate: 0 }
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }
    
    const data = await res.json();

    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
        <main className="flex min-h-screen w-full flex-col bg-white">
          <Employees
            ranks={data.ranks || []}
            categories={data.categories || []}
            qualeList={data.qualeList || []}
            positions={data.positions || []}
            departments={data.departments || []}
            employees={data.employees || []}
            qualeRecords={data.qualeRecords || []}
          />
        </main>
      </div>
    );
  } catch (error) {
    console.error('Error:', error);
    return <div>データの読み込みに失敗しました</div>;
  }
}