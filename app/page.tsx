import EmployeeQual from "./(pages)/employee-qual/EmployeeQual";

export default async function Home() {
  // 環境に応じたURLを取得
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  
  try {
    const res = await fetch(`${baseUrl}/api/employee-qual`, {
      cache: 'no-store'
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }
    
    const data = await res.json();

    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
        <main className="flex min-h-screen w-full flex-col bg-white">
          <EmployeeQual
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