import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

export async function GET() {
  try {
    const sql = neon(process.env.DATABASE_URL!);

    const employees = await sql`SELECT * FROM employee_mst`;
    const qualeRecords = await sql`SELECT * FROM employee_qual_t`;
    const departments = await sql`SELECT * FROM dept_mst ORDER BY dept_code`;
    const positions = await sql`SELECT * FROM position_mst`;
    const qualeList = await sql`SELECT * FROM qual_mst`;
    const categories = await sql`SELECT * FROM category_mst`;
    const ranks = await sql`SELECT * FROM rank_mst`;

    return NextResponse.json({
      employees,
      qualeRecords,
      departments,
      positions,
      qualeList,
      categories,
      ranks,
    });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

// export async function GET(request: NextRequest) {
//   try {
//     const sql = neon(process.env.DATABASE_URL!);
//     const searchParams = request.nextUrl.searchParams;

//     // クエリパラメータを取得
//     const searchQuery = searchParams.get('search') || '';
//     const departmentId = searchParams.get('department');
//     const rankId = searchParams.get('rank');

//     // WHERE句を動的に構築
//     let whereConditions = [];
//     if (searchQuery) whereConditions.push(`employee_name LIKE '%${searchQuery}%'`);
//     if (departmentId && departmentId !== 'all') whereConditions.push(`dept_id = ${departmentId}`);

//     const whereClause = whereConditions.length > 0
//       ? `WHERE ${whereConditions.join(' AND ')}`
//       : '';

//     const employees = await sql`SELECT * FROM employees ${whereClause}`;
//     const ranks = await sql`SELECT * FROM ranks`;

//     return NextResponse.json({ employees, ranks });
//   } catch (error) {
//     console.error('Database error:', error);
//     return NextResponse.json({ error: 'Database error' }, { status: 500 });
//   }
// }
