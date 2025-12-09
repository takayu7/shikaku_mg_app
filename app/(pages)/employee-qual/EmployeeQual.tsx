"use client";
import { useState, useMemo } from "react";
import {
  Flex,
  Badge,
  Card,
  Heading,
  Grid,
  Select,
  Checkbox,
  Table,
} from "@radix-ui/themes";

import {
  Department,
  Position,
  Quale,
  Category,
  Rank,
  QualeRecord,
  Employee,
  RecordInfo,
} from "@/app/type/type";

export default function EmployeeQual(
  { ranks , categories , qualeList ,positions, departments, employees, qualeRecords}:
  { ranks: Rank[], categories: Category[], qualeList: Quale[], positions: Position[] ,departments: Department[] ,employees: Employee[] ,qualeRecords: QualeRecord[] }
) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [departmentFilter, setDepartmentFilter] = useState<string>("all");
  const [qualeFilter, setQualeFilter] = useState<string>("all");
  const [obtainedFromFilter, setObtainedFromFilter] = useState<string>("");
  const [obtainedToFilter, setObtainedToFilter] = useState<string>("");
  const [rankFilter, setRankFilter] = useState<number | "all">("all");
  const [positionFilter, setPositonFilter] = useState<number[] | "all">("all");
  const [categoryFilter, setCategoryFilter] = useState<number | "all">("all");

  console.log("qualeRecords:", qualeRecords);

  // 部門名の階層表示用リスト作成
  const newDepartmentList: Department[] = useMemo(() => {
    return (
      departments.map((dept)=>{
        const parent_name = departments.find((d)=> d.dept_id === dept.parent_dept_id)?.dept_name || "";
        return {
          dept_id: dept.dept_id,
          dept_name: parent_name ? parent_name+'/' + dept.dept_name : dept.dept_name,
          dept_code: dept.dept_code,
          parent_dept_id: dept.parent_dept_id,
      }})
    )
  },[departments])

  // 社員データに資格情報を結合
  const employeeDataList: RecordInfo[] = useMemo(() => {
    return (
      employees.map((emp: Employee) => {
        const empQuals = qualeRecords.filter(
          (qr) => qr.employee_id === emp.employee_id
        );
        const dept = newDepartmentList.find((d) => d.dept_id === emp.dept_id);
        const pos = positions.find((p) => p.position_id === emp.position_id);
        const empRecordInfo: RecordInfo = {
          quales: empQuals.map((eq: QualeRecord) => {
            const qual = qualeList.find((q) => q.qual_id === eq.qual_id);
            const rank = ranks.find((r) => r.rank_id === qual?.rank_id);
            const cat = categories.find((c) => c.category_id === qual?.category_id);
            return {
              employee_qual_id: eq.employee_qual_id,
              qual_id: qual ? String(qual.qual_id) : "",
              qual_name: qual ? qual.qual_name : "",
              category_id: qual ? qual.category_id : 0,
              category_name: cat ? cat.category_name : "",
              acquisition_date: typeof eq.acquisition_date === 'string' 
                ? (eq.acquisition_date as string).split("T")[0]
                : new Date(eq.acquisition_date as Date).toISOString().split("T")[0],
              rank_id: rank ? rank.rank_id : 0,
              rank_name: rank ? rank.rank_name : "",
            };
          }),
          employee_id: emp.employee_id,
          employee_name: emp.employee_name,
          dept_id: emp.dept_id,
          dept_name: dept ? dept.dept_name : "",
          position_id: emp.position_id,
          position_name: pos ? pos.position_name : "",
        };
        return empRecordInfo;
      }) || []
    );
  }, [ranks , categories , qualeList, positions, newDepartmentList , employees ,qualeRecords]);



  // 検索フィルタ
  const filteredData = useMemo(() => {
    let filtered = employeeDataList;

    //名前
    if (searchQuery) {
      filtered = filtered.filter((emp) =>
        emp.employee_name.includes(searchQuery)
      );
    }
    //部署
    if(departmentFilter !== 'all'){
      filtered = filtered.filter((emp)=> emp.dept_id === Number(departmentFilter))
    }

    //役職
    if(positionFilter !== 'all'){
      filtered = filtered.filter((emp)=> positionFilter.includes(Number(emp.position_id)))
    }
    //資格
    if(qualeFilter !== 'all'){
      filtered = filtered.filter((emp)=> emp.quales.some((q)=> q.qual_id === qualeFilter))
      filtered = filtered.map((emp)=>({
        ...emp,
        quales: emp.quales.filter((q)=> q.qual_id === qualeFilter)
      }))
    }
    //資格区分
    if(categoryFilter !== 'all'){
      filtered = filtered.filter((emp)=> emp.quales.some((q)=> q.category_id === categoryFilter))
      filtered = filtered.map((emp)=>({
        ...emp,
        quales: emp.quales.filter((q)=> q.category_id === categoryFilter)
      }))
    }
    // ランクでフィルター
    if (rankFilter !== 'all') {
      filtered = filtered.filter(emp => emp.quales.some(q => q.rank_id === rankFilter));
      filtered = filtered.map(emp => ({
        ...emp,
        quales: emp.quales.filter(q => q.rank_id === rankFilter)
      }));
    }

    // 取得年フィルタ
    if (obtainedFromFilter || obtainedToFilter) {
      console.log(obtainedFromFilter)
      console.log(obtainedToFilter)
      //日付詳細選択
      filtered = filtered.filter(emp =>
        emp.quales.some(cert => {
          const obtainedDate = new Date(cert.acquisition_date);
          const fromDate = obtainedFromFilter ? new Date(obtainedFromFilter) : null;
          const toDate = obtainedToFilter ? new Date(obtainedToFilter) : null;

          if (fromDate && toDate) {
            return obtainedDate >= fromDate && obtainedDate <= toDate;
          } else if (fromDate) {
            return obtainedDate >= fromDate;
          } else if (toDate) {
            return obtainedDate <= toDate;
          }
          return true;
        })
      );
      // 各社員の資格リストも、選択された取得日のみに絞り込む
      filtered = filtered.map(emp => ({
        ...emp,
        quales: emp.quales.filter(cert => {
          const obtainedDate = new Date(cert.acquisition_date);
          const fromDate = obtainedFromFilter ? new Date(obtainedFromFilter) : null;
          const toDate = obtainedToFilter ? new Date(obtainedToFilter) : null;

          if (fromDate && toDate) {
            return obtainedDate >= fromDate && obtainedDate <= toDate;
          } else if (fromDate) {
            return obtainedDate >= fromDate;
          } else if (toDate) {
            return obtainedDate <= toDate;
          }
          return true;
        })
      }))
    }
    return filtered;
  }, [employeeDataList, searchQuery, departmentFilter, positionFilter, qualeFilter, categoryFilter, rankFilter , obtainedFromFilter, obtainedToFilter]);


  const getRewardRankColor = (rank: string) => {
    switch (rank) {
      case 'S': return 'bg-purple-100 text-purple-700 border-purple-300';
      case 'A': return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'B': return 'bg-green-100 text-green-700 border-green-300';
      case 'C': return 'bg-gray-100 text-gray-700 border-gray-300';
      case 'D': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      default: return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-500 font-sans">
      <main className="flex min-h-screen w-full flex-col bg-white">
        <div className="flex flex-col gap-6">
          <h2>社員別資格一覧</h2>
          <Flex direction="column" gap="4">
            <Card className="card" style={{ padding: '1.5rem' }}>
              <Heading size="4" className="flex items-center justify-between">
                フィルタ・検索
              </Heading>
              <Grid columns="12" gap="4" mt="4">
                <div className="col-span-3">
                  <label htmlFor="search">名前</label>
                  <div className="relative mt-1.5">
                    <input
                      id="search"
                      placeholder="名前で検索"
                      value={searchQuery as string}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setSearchQuery(e.target.value)
                      }
                      className="input-field"
                    />
                  </div>
                </div>
                <div className="col-span-3">
                  <label htmlFor="department">部門</label>
                  <div className="relative w-full mt-1.5">
                    <Select.Root
                      value={departmentFilter}
                      onValueChange={setDepartmentFilter}
                    >
                      <Select.Trigger
                        id="department"
                        className="select-field"
                        style={{
                          width: "100%",
                          borderRadius: "0.375rem",
                          padding: "0.5rem 0.75rem",
                          height: "42px",
                        }}
                      />
                      <Select.Content>
                        <Select.Item value="all">すべての部署</Select.Item>
                        {newDepartmentList.map((dept: Department) => (
                          <Select.Item
                            key={dept.dept_id}
                            value={String(dept.dept_id)}
                          >
                            {dept.dept_name}
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select.Root>
                  </div>
                </div>
                <div className="col-span-6">
                  <label>役職</label>
                  <div className="flex items-center gap-2 mt-4 flex-wrap">
                    {positions.map((pos: Position) => (
                      <div
                        key={pos.position_id}
                        className="flex items-center justify-center gap-2"
                      >
                        <Checkbox
                          onCheckedChange={(checked) => {
                            if (checked) {
                              if (positionFilter === "all") {
                                setPositonFilter([pos.position_id]);
                              } else {
                                setPositonFilter([
                                  ...positionFilter,
                                  pos.position_id,
                                ]);
                              }
                            } else {
                              if (positionFilter !== "all") {
                                const newPos = positionFilter.filter(
                                  (p) => p !== pos.position_id
                                );
                                if (newPos.length === 0) {
                                  setPositonFilter("all");
                                } else {
                                  setPositonFilter(newPos);
                                }
                              }
                            }
                          }}
                          checked={
                            positionFilter === "all"
                              ? false
                              : positionFilter.includes(pos.position_id)
                          }
                        />
                        <div>{pos.position_name}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-span-3">
                  <label htmlFor="quale">資格名</label>
                  <Select.Root
                    value={qualeFilter}
                    onValueChange={setQualeFilter}
                  >
                    <Select.Trigger
                      id="quale"
                      className="select-field"
                      style={{
                        width: "100%",
                        borderRadius: "0.375rem",
                        padding: "0.5rem 0.75rem",
                        height: "42px",
                      }}
                    />
                    <Select.Content>
                      <Select.Item value="all">すべての資格</Select.Item>
                      {qualeList.map((qual: Quale) => (
                        <Select.Item
                          key={qual.qual_id}
                          value={String(qual.qual_id)}
                        >
                          {qual.qual_name}
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Root>
                </div>
                <div className="col-span-3">
                  <label htmlFor="category">資格区分</label>
                  <Select.Root
                    value={String(categoryFilter)}
                    onValueChange={(value) =>
                      setCategoryFilter(value === "all" ? "all" : Number(value))
                    }
                  >
                    <Select.Trigger
                      id="category"
                      className="select-field"
                      style={{
                        width: "100%",
                        borderRadius: "0.375rem",
                        padding: "0.5rem 0.75rem",
                        height: "42px",
                      }}
                    />
                    <Select.Content>
                      <Select.Item value="all">すべての資格区分</Select.Item>
                      {categories.map((category: Category) => (
                        <Select.Item
                          key={category.category_id}
                          value={String(category.category_id)}
                        >
                          {category.category_name}
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Root>
                </div>
                <div className="col-span-2">
                  <label htmlFor="rank">ランク</label>
                  <Select.Root
                    value={String(rankFilter)}
                    onValueChange={(value) =>
                      setRankFilter(value === "all" ? "all" : Number(value))
                    }
                  >
                    <Select.Trigger
                      id="rank"
                      className="select-field"
                      style={{
                        width: "100%",
                        borderRadius: "0.375rem",
                        padding: "0.5rem 0.75rem",
                        height: "42px",
                      }}
                    />
                    <Select.Content>
                      <Select.Item value="all">すべてのランク</Select.Item>
                      {ranks.map((rank: Rank) => (
                        <Select.Item
                          key={rank.rank_id}
                          value={String(rank.rank_id)}
                        >
                          {rank.rank_name}
                        </Select.Item>
                      ))}
                    </Select.Content>
                  </Select.Root>
                </div>
                <div className="col-span-4">
                  <label htmlFor="search">取得年月</label>
                  <div className="relative flex items-center space-x-3">
                    <input
                      id="fromDate"
                      type="month"
                      placeholder="FROM"
                      value={obtainedFromFilter}
                      onChange={(e) => setObtainedFromFilter(e.target.value)}
                      className="input-field"
                    />
                    <label>～</label>
                    <input
                      id="toDate"
                      type="month"
                      placeholder="TO"
                      value={obtainedToFilter}
                      onChange={(e) => setObtainedToFilter(e.target.value)}
                      className="input-field"
                    />
                  </div>
                </div>
              </Grid>
            </Card>
            <Card className="card" style={{ padding: '1.5rem' }}>
              <Heading size="4" className="flex items-center justify-between">
                社員別資格一覧
              </Heading>
              <div className="border rounded-lg overflow-hidden border-gray-200 mt-4">
                <div className="">
                  <Table.Root>
                    <Table.Header className="bg-cyan-900/30">
                      <Table.Row>
                        <Table.ColumnHeaderCell>社員名</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>部門</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>役職</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>資格名</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>
                          資格区分
                        </Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>ランク</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>取得日</Table.ColumnHeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {filteredData.length === 0 ? (
                        <Table.Row>
                          <Table.Cell
                            colSpan={7}
                            className="text-center py-8 text-gray-500"
                          >
                            該当する社員が見つかりません
                          </Table.Cell>
                        </Table.Row>
                      ) : (
                        filteredData.map((emp) => {
                          const rowSpan = emp.quales.length;
                          return emp.quales.map((q, index) => (
                            <Table.Row key={q.employee_qual_id}>
                              {index === 0 && (
                                <>
                                  <Table.Cell rowSpan={rowSpan}>
                                    {emp.employee_name}
                                  </Table.Cell>
                                  <Table.Cell rowSpan={rowSpan}>
                                    {emp.dept_name}
                                  </Table.Cell>
                                  <Table.Cell rowSpan={rowSpan}>
                                    {emp.position_name}
                                  </Table.Cell>
                                </>
                              )}
                              <Table.Cell>{q.qual_name}</Table.Cell>
                              <Table.Cell>
                                {categories.find(
                                  (cat) =>
                                    cat.category_id ===
                                    qualeList.find(
                                      (qual) => qual.qual_name === q.qual_name
                                    )?.category_id
                                )?.category_name || ""}
                              </Table.Cell>
                              <Table.Cell>
                                <Badge variant="outline" className={getRewardRankColor(q.rank_name)}>
                                  {q.rank_name}
                                </Badge>
                              </Table.Cell>
                              <Table.Cell>{q.acquisition_date}</Table.Cell>
                            </Table.Row>
                          ));
                        })
                      )}
                    </Table.Body>
                  </Table.Root>
                </div>
              </div>
            </Card>
          </Flex>
        </div>
      </main>
    </div>
  );
}
