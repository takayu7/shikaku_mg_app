"use client";
import { useState, useMemo, useEffect } from "react";
import {
  Flex,
  Card,
  Heading,
  Grid,
  Select,
  Button,
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
  AddEmployeeInfo,
} from "@/app/type/type";
import { Users ,PencilLine ,Trash2, Plus  } from "lucide-react";
import { AddEmployeeDialog } from "@/app/components/AddEmployeeDialog";

interface EmployeesProps {
  ranks: Rank[];
  categories: Category[];
  qualeList: Quale[];
  positions: Position[];
  departments: Department[];
//   employees: Employee[];
  qualeRecords: QualeRecord[];
}

export default function Employees({
  ranks,
  categories,
  qualeList,
  positions,
  departments,
//   employees,
  qualeRecords,
}: EmployeesProps) {
  const [localEmployees, setLocalEmployees] = useState<Employee[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [departmentFilter, setDepartmentFilter] = useState<string>("all");
  const [positionFilter, setPositionFilter] = useState<string>("all");
  const [addDialogOpen, setAddDialogOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(()=>{
    fetchData()
  },[])

    // データ取得関数
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/employee', {
        cache: 'no-store'
      });
      if (response.ok) {
        const data = await response.json();
        setLocalEmployees(data.employees || []);
      }
    } catch (error) {
      console.error('データ取得エラー:', error);
    } finally {
      setLoading(false);
    }
  };

  // 社員登録処理
  const handleAddEmployee = async (employee: AddEmployeeInfo): Promise<boolean> => {
    setLoading(true);
    try {
      const response = await fetch('/api/employee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
      });
      
      if (response.ok) {
        // 登録成功後、全データを再取得
        await fetchData();
        setAddDialogOpen(false);
        return true;
      }
      return false;
    } catch (error) {
      console.error('登録エラー:', error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const newDepartmentList: Department[] = useMemo(() => {
    return departments.map((dept) => {
      const parent_name =
        departments.find((d) => d.dept_id === dept.parent_dept_id)?.dept_name ||
        "";
      return {
        dept_id: dept.dept_id,
        dept_name: parent_name
          ? parent_name + "/" + dept.dept_name
          : dept.dept_name,
        dept_code: dept.dept_code,
        parent_dept_id: dept.parent_dept_id,
      };
    });
  }, [departments]);

  // 社員データに資格情報を結合
  const employeeDataList: RecordInfo[] = useMemo(() => {
    return (
      localEmployees.map((emp: Employee) => {
        const empQuals = qualeRecords.filter(
          (qr) => qr.employee_id === emp.employee_id
        );
        const dept = newDepartmentList.find((d) => d.dept_id === emp.dept_id);
        const pos = positions.find((p) => p.position_id === emp.position_id);
        const empRecordInfo: RecordInfo = {
          quales: empQuals.map((eq: QualeRecord) => {
            const qual = qualeList.find((q) => q.qual_id === eq.qual_id);
            const rank = ranks.find((r) => r.rank_id === qual?.rank_id);
            const cat = categories.find(
              (c) => c.category_id === qual?.category_id
            );
            return {
              employee_qual_id: eq.employee_qual_id,
              qual_id: qual ? String(qual.qual_id) : "",
              qual_name: qual ? qual.qual_name : "",
              category_id: qual ? qual.category_id : 0,
              category_name: cat ? cat.category_name : "",
              acquisition_date:
                typeof eq.acquisition_date === "string"
                  ? (eq.acquisition_date as string).split("T")[0]
                  : new Date(eq.acquisition_date as Date)
                      .toISOString()
                      .split("T")[0],
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
  }, [
    ranks,
    categories,
    qualeList,
    positions,
    newDepartmentList,
    localEmployees,
    qualeRecords,
  ]);

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
    if (departmentFilter !== "all") {
      filtered = filtered.filter(
        (emp) => emp.dept_id === Number(departmentFilter)
      );
    }

    //役職
    if (positionFilter !== "all") {
      filtered = filtered.filter(
        (emp) => emp.position_id === Number(positionFilter)
      );
    }

    return filtered;
  }, [
    employeeDataList,
    searchQuery,
    departmentFilter,
    positionFilter,
  ]);

    const onCancel = () => {
        setAddDialogOpen(false);
    }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-500 font-sans">
      <main className="flex min-h-screen w-full flex-col bg-white">
        <div className="flex flex-col gap-6">
          <h2>社員一覧</h2>
          <Flex direction="column" gap="4">
            <Card className="card" style={{ padding: "1.5rem" }}>
              <Heading size="4" className="flex items-center justify-between">
                フィルタ・検索
              </Heading>
              <Grid columns="12" gap="4" mt="4">
                <div className="col-span-4">
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
                <div className="col-span-4">
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
                <div className="col-span-4">
                  <label>役職</label>
                  <div className="relative w-full mt-1.5">
                    <Select.Root
                      value={positionFilter}
                      onValueChange={setPositionFilter}
                    >
                      <Select.Trigger
                        id="position"
                        className="select-field"
                        style={{
                          width: "100%",
                          borderRadius: "0.375rem",
                          padding: "0.5rem 0.75rem",
                          height: "42px",
                        }}
                      />
                      <Select.Content>
                        <Select.Item value="all">すべての役職</Select.Item>
                        {positions.map((position: Position) => (
                          <Select.Item
                            key={position.position_id}
                            value={String(position.position_id)}
                          >
                            {position.position_name}
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select.Root>
                  </div>
                </div>
              </Grid>
            </Card>
            <Card className="card" style={{ padding: "1.5rem" }}>
              <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Users className="size-4" />
                  <span>
                    表示人数: {filteredData.length}人 / 全{localEmployees.length}人
                  </span>
                </div>
                {loading ? (
                  <div>loading...</div>
                ) : (
                    <div></div>
                )
                }
                <div>
                  <Button
                    onClick={() => setAddDialogOpen(true)}
                  >
                    <Plus className="size-4" />
                    社員追加
                  </Button>
                </div>
              </div>
              <div className="border rounded-lg overflow-hidden border-gray-200 mt-4">
                <div className="">
                  <Table.Root>
                    <Table.Header className="bg-cyan-900/30">
                      <Table.Row>
                        <Table.ColumnHeaderCell className="w-1/4">社員名</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>部門</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell>役職</Table.ColumnHeaderCell>
                        <Table.ColumnHeaderCell className="flex flex-row items-center justify-center gap-4">編集</Table.ColumnHeaderCell>
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
                        filteredData.map((emp,index) => (
                            <Table.Row key={index}>
                                  <Table.Cell>
                                    {emp.employee_name}
                                  </Table.Cell>
                                  <Table.Cell>
                                    {emp.dept_name}
                                  </Table.Cell>
                                  <Table.Cell>
                                    {emp.position_name}
                                  </Table.Cell>
                                  <Table.Cell>
                                    <div className="flex flex-row items-center justify-center gap-4">
                                        <Button variant="outline">
                                            <PencilLine className="size-4" />
                                        </Button>
                                        <Button variant="outline" color="red">
                                            <Trash2 className="size-4" />
                                        </Button>
                                    </div>
                                  </Table.Cell>
                            </Table.Row>
                          ))
                      )}
                    </Table.Body>
                  </Table.Root>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Users className="size-4" />
                  <span>
                    表示人数: {filteredData.length}人 / 全{localEmployees.length}人
                  </span>
                </div>
              </div>
            </Card>
          </Flex>
        </div>
      </main>
      <AddEmployeeDialog
        departments={departments}
        positions={positions}
        handleAddEmployee={handleAddEmployee}
        open={addDialogOpen}
        onCancel={onCancel}
        loading={loading}
      />
    </div>
  );
}
