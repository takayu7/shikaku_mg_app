"use client";
import { useState, useMemo } from "react";
import {
  Department,
  Position,
//   Quale,
//   Category,
//   Rank,
//   QualeRecord,
//   Employee,
//   RecordInfo,
  AddEmployeeInfo,
} from "@/app/type/type";
import { Flex, Select, Button, Dialog } from "@radix-ui/themes";

interface AddEmployeeDialogProps {
  departments: Department[];
  positions: Position[];
  handleAddEmployee: (employee: AddEmployeeInfo) => Promise<boolean>;
  open: boolean;
  onCancel: () => void;
  loading: boolean;
}

const defalutEmpData = {
  name_sei: "",
  name_mei: "",
  furigana_sei: "",
  furigana_mei: "",
  dept_id: "",
  position_id: "",
};

export function AddEmployeeDialog({
  departments,
  positions,
  handleAddEmployee,
  open,
  onCancel,
  loading,
}: AddEmployeeDialogProps) {
  const [newEmployeeData, setNewEmployeeData] = useState(defalutEmpData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const employee_name = `${newEmployeeData.name_sei} ${newEmployeeData.name_mei}`;
    const employee_furigana = `${newEmployeeData.furigana_sei} ${newEmployeeData.furigana_mei}`;
    const dept_id = Number(newEmployeeData.dept_id);
    const position_id = Number(newEmployeeData.position_id);
    const newEmployee: AddEmployeeInfo = {
      employee_name,
      employee_furigana,
      dept_id,
      position_id,
    };
    const success = await handleAddEmployee(newEmployee);
    if (success) {
      setNewEmployeeData(defalutEmpData);
    }
  };

  // 部門名の階層表示用リスト作成
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

  return (
    <Dialog.Root open={open} onOpenChange={onCancel}>
      <Dialog.Content style={{ padding: "2.5rem" }}>
        <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">
          社員登録
        </Dialog.Title>
        <div>
          <form onSubmit={handleSubmit}>
            <Flex direction="column" gap="4">
              <Flex direction="column" gap="2">
                <label htmlFor="employee">社員名 *</label>
                <Flex direction="row" gap="2">
                  <Flex direction="column" gap="2" width="50%">
                    <label htmlFor="employee">姓</label>
                    <input
                      value={newEmployeeData.name_sei}
                      onChange={(e) =>
                        setNewEmployeeData({
                          ...newEmployeeData,
                          name_sei: e.target.value,
                        })
                      }
                      className="input-field"
                    />
                  </Flex>
                  <Flex direction="column" gap="2" width="50%">
                    <label htmlFor="employee">名</label>
                    <input
                      value={newEmployeeData.name_mei}
                      onChange={(e) =>
                        setNewEmployeeData({
                          ...newEmployeeData,
                          name_mei: e.target.value,
                        })
                      }
                      className="input-field"
                    />
                  </Flex>
                </Flex>
              </Flex>
              <Flex direction="column" gap="2">
                <label htmlFor="employee">ふりがな *</label>
                <Flex direction="row" gap="2">
                  <Flex direction="column" gap="2" width="50%">
                    <label htmlFor="employee">せい</label>
                    <input
                      value={newEmployeeData.furigana_sei}
                      onChange={(e) =>
                        setNewEmployeeData({
                          ...newEmployeeData,
                          furigana_sei: e.target.value,
                        })
                      }
                      className="input-field"
                    />
                  </Flex>
                  <Flex direction="column" gap="2" width="50%">
                    <label htmlFor="employee">めい</label>
                    <input
                      value={newEmployeeData.furigana_mei}
                      onChange={(e) =>
                        setNewEmployeeData({
                          ...newEmployeeData,
                          furigana_mei: e.target.value,
                        })
                      }
                      className="input-field"
                    />
                  </Flex>
                </Flex>
              </Flex>
              <Flex direction="column" gap="2">
                <label htmlFor="employee">部門 *</label>
                <Flex direction="column" gap="2" width="100％">
                  <Select.Root
                    value={newEmployeeData.dept_id}
                    onValueChange={(value) =>
                      setNewEmployeeData({
                        ...newEmployeeData,
                        dept_id: value,
                      })
                    }
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
                </Flex>
              </Flex>
              <Flex direction="column" gap="2">
                <label htmlFor="employee">役職 *</label>
                <Flex direction="column" gap="2" width="100％">
                  <Select.Root
                    value={newEmployeeData.position_id}
                    onValueChange={(value)=>
                        setNewEmployeeData({
                            ...newEmployeeData,
                            position_id:value
                        })
                    }
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
                </Flex>
              </Flex>
              <Flex direction="row" gap="2" >
              <Button type="button" variant="outline" onClick={()=>{onCancel(); setNewEmployeeData(defalutEmpData);}} style={{ width: "50%" }}>
                キャンセル
              </Button>
              <Button type="submit" style={{ width: "50%" }} disabled={loading}>{loading ? "登録中..." : "登録"}</Button>
              </Flex>
            </Flex>
          </form>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
}
