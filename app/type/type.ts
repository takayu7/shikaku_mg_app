// 社員情報
export interface Employee {
  employee_id: number;
  employee_name: string;
  employee_furigana: string;
  dept_id: number;
  position_id: number;
  version: number;
  rec_mod_time: string | null;
}

//資格情報
export interface Quale   {
    qual_id: number;
    qual_name: string;
    category_id: number;
    rank_id: number;
    memo: string | null;
    version: number;
    rec_mod_time: string | null;
  }

//　報奨金ランク
export interface Rank {
  rank_id: number;
  rank_name: string;
  version: number;
  rec_mod_time: string | null;
}

// 部門情報
export interface Department {
  dept_id: number;
  dept_name: string;
  dept_code: number;
  parent_dept_id: number;
  version?: number;
  rec_mod_time?: string | null;
}

// 職位情報
export interface Position {
    position_id: number;
    position_name: string;
    position_grade: number;
    version: number;
    rec_mod_time: string | null;
}

// 資格区分
export interface Category {
    category_id: number;
    category_name: string;
    version:number;
    rec_mod_time: string | null;
}

// 資格取得記録情報
export interface QualeRecord {
  employee_qual_id: number;
  employee_id: number;
  qual_id: number;
  acquisition_date: Date;
  version:number;
  rec_mod_time: string | null;
}

export interface RecordInfo {
    quales: {
        employee_qual_id: number;
        qual_id: string;
        qual_name: string;
        category_id: number;
        category_name: string;
        acquisition_date: string;
        rank_id: number;
        rank_name: string;
    }[];
    employee_id: number;
    employee_name: string;
    dept_id: number;
    dept_name: string;
    position_id: number;
    position_name: string;
}

