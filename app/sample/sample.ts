import { Quale, Employee, QualeRecord, Department, Position,Category, Rank } from "@/app/type/type";

// 資格一覧のサンプルデータ
export const qualeList: Quale[] = [
{
    "qual_id": 1,
    "qual_name": "ITパスポート試験",
    "category_id": 1,
    "rank_id": 5,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 2,
    "qual_name": "基本情報技術者試験",
    "category_id": 1,
    "rank_id": 4,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 3,
    "qual_name": "応用情報技術者試験",
    "category_id": 1,
    "rank_id": 3,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 4,
    "qual_name": "情報処理安全確保支援士",
    "category_id": 1,
    "rank_id": 3,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 5,
    "qual_name": "システムアーキテクト試験",
    "category_id": 1,
    "rank_id": 2,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 6,
    "qual_name": "プロジェクトマネージャ試験",
    "category_id": 1,
    "rank_id": 2,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 7,
    "qual_name": "ネットワークスペシャリスト試験",
    "category_id": 1,
    "rank_id": 2,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 8,
    "qual_name": "データベーススペシャリスト試験",
    "category_id": 1,
    "rank_id": 2,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 9,
    "qual_name": "組み込みシステムスペシャリスト試験",
    "category_id": 1,
    "rank_id": 2,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 10,
    "qual_name": "ITサービスマネージャ試験",
    "category_id": 1,
    "rank_id": 2,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 11,
    "qual_name": "システム監査技術者試験",
    "category_id": 1,
    "rank_id": 2,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 12,
    "qual_name": "エンベデッドシステムスペシャリスト",
    "category_id": 1,
    "rank_id": 2,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 13,
    "qual_name": "モバイルコンピューティング技術者",
    "category_id": 1,
    "rank_id": 4,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 14,
    "qual_name": "情報セキュリティマネジメント試験",
    "category_id": 1,
    "rank_id": 4,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 15,
    "qual_name": "ドローン検定",
    "category_id": 4,
    "rank_id": 5,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 16,
    "qual_name": "画像処理エンジニア検定",
    "category_id": 1,
    "rank_id": 3,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 17,
    "qual_name": "CGクリエイター検定",
    "category_id": 1,
    "rank_id": 3,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 18,
    "qual_name": "CAD利用技術者試験",
    "category_id": 4,
    "rank_id": 4,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 19,
    "qual_name": "ウェブデザイン技能検定",
    "category_id": 1,
    "rank_id": 3,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 20,
    "qual_name": "統計検定",
    "category_id": 4,
    "rank_id": 3,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 21,
    "qual_name": "G検定",
    "category_id": 1,
    "rank_id": 4,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 22,
    "qual_name": "E資格",
    "category_id": 1,
    "rank_id": 3,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 23,
    "qual_name": "Linux技術者認定試験 (LPIC)",
    "category_id": 1,
    "rank_id": 4,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 24,
    "qual_name": "CCNA",
    "category_id": 1,
    "rank_id": 4,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 25,
    "qual_name": "CCNP",
    "category_id": 1,
    "rank_id": 3,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 26,
    "qual_name": "AWS認定資格",
    "category_id": 1,
    "rank_id": 3,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 27,
    "qual_name": "Google Cloud 認定資格",
    "category_id": 1,
    "rank_id": 3,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 28,
    "qual_name": "Microsoft Azure 認定資格",
    "category_id": 1,
    "rank_id": 3,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 29,
    "qual_name": "Oracle認定Javaプログラマ",
    "category_id": 1,
    "rank_id": 4,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 30,
    "qual_name": "Pythonエンジニア認定試験",
    "category_id": 1,
    "rank_id": 4,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 31,
    "qual_name": "VBAエキスパート",
    "category_id": 1,
    "rank_id": 5,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 32,
    "qual_name": "Unity認定技術者",
    "category_id": 1,
    "rank_id": 4,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 33,
    "qual_name": "簿記3級",
    "category_id": 3,
    "rank_id": 5,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 34,
    "qual_name": "簿記2級",
    "category_id": 3,
    "rank_id": 4,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  },
  {
    "qual_id": 35,
    "qual_name": "簿記1級",
    "category_id": 3,
    "rank_id": 3,
    "memo": null,
    "version": 0,
    "rec_mod_time": null
  }
];

//資格種別
export const categories: Category[] = [
{
    "category_id": 1,
    "category_name": "情報処理技術者試験",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 2,
    "category_name": "Oracle Certified Java Programmer",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 3,
    "category_name": "HTML5 Professional",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 4,
    "category_name": "OpenJS（Node.js）",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 5,
    "category_name": "Python 3 エンジニア認定試験",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 6,
    "category_name": "PHP技術者認定試験",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 7,
    "category_name": "C言語プログラミング能力認定試験",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 8,
    "category_name": "VBAエキスパート",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 9,
    "category_name": "IIBA認定ビジネスアナリシス",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 10,
    "category_name": "UML",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 11,
    "category_name": "JSTQB認定テスト技術者",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 12,
    "category_name": "JCSQEソフトウェア品質技術者資格",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 13,
    "category_name": "ORACLE MASTER",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 14,
    "category_name": "OSS-DB（PostgerSQL）",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 15,
    "category_name": "LPIC（LinuC）認定試験",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 16,
    "category_name": "Kubernetes技術者認定",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 17,
    "category_name": "IoTシステム技術検定",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 18,
    "category_name": "AWS認定試験",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 19,
    "category_name": "Azure/Microsoft",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 20,
    "category_name": "Google Cloud",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 21,
    "category_name": "JDLAディープラーニング検定",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 22,
    "category_name": "データサイエンティスト検定（DS検定）",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 23,
    "category_name": "統計検定",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 24,
    "category_name": "生成AIパスポート",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 25,
    "category_name": "AI実装検定",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 26,
    "category_name": "DX推進パスポート",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 27,
    "category_name": "DXビジネス検定",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 28,
    "category_name": "ITIL",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 29,
    "category_name": "PMP",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 30,
    "category_name": "P2M",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 31,
    "category_name": "ウェブデザイン技能検定",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 32,
    "category_name": "ウェブマスター検定",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 33,
    "category_name": "Web検定",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 34,
    "category_name": "ビジネス・キャリア検定",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 35,
    "category_name": "簿記",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 36,
    "category_name": "販売士",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 37,
    "category_name": "医療情報技師育成部会",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 38,
    "category_name": "マネジメント検定 （旧：経営学検定）",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 39,
    "category_name": "ビジネス実務法務検定",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 40,
    "category_name": "ビジネス会計検定",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 41,
    "category_name": "FASS検定（経理・財務スキル検定）",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 42,
    "category_name": "ビジネスマネージャー検定",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 43,
    "category_name": "メンタルヘルスマネジメント",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 44,
    "category_name": "衛生管理士",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 45,
    "category_name": "人事総務検定",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 46,
    "category_name": "給与計算技能士",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 47,
    "category_name": "ビジネスマナー",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 48,
    "category_name": "コンプライアンス",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 49,
    "category_name": "情報セキュリティ",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 50,
    "category_name": "数学検定",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 51,
    "category_name": "英語検定",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 52,
    "category_name": "MOS",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 53,
    "category_name": "TOEIC",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 54,
    "category_name": "ＩＴコーディネータ",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 55,
    "category_name": "国家資格キャリアコンサルタント",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 56,
    "category_name": "技術士（情報工学部門）",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 57,
    "category_name": "社会保険労務士",
    "version": 0,
    "rec_mod_time": null
  },
  {
    "category_id": 58,
    "category_name": "中小企業診断士",
    "version": 0,
    "rec_mod_time": null
  }
];

export const ranks: Rank[] = [
  { rank_id: 1, rank_name: 'S', version: 0, rec_mod_time: null },
  { rank_id: 2, rank_name: 'A', version: 0, rec_mod_time: null },
  { rank_id: 3, rank_name: 'B', version: 0, rec_mod_time: null },
  { rank_id: 4, rank_name: 'C', version: 0, rec_mod_time: null },
  { rank_id: 5, rank_name: 'D', version: 0, rec_mod_time: null },
  { rank_id: 6, rank_name: 'E', version: 0, rec_mod_time: null },
]


// 社員一覧のサンプルデータ
export const employees: Employee[] = [
    { employee_id: 1, employee_name: '山田 太郎', employee_furigana: 'やまだ たろう', dept_id: 2, position_id: 4, version: 0, rec_mod_time: null },
    { employee_id: 2, employee_name: '佐藤 花子', employee_furigana: 'さとう はなこ', dept_id: 3, position_id: 4, version: 0, rec_mod_time: null },
    { employee_id: 3, employee_name: '鈴木 一郎', employee_furigana: 'すずき いちろう', dept_id: 2, position_id: 3, version: 0, rec_mod_time: null },
    { employee_id: 4, employee_name: '田中 美咲', employee_furigana: 'たなか みさき', dept_id: 4, position_id: 4, version: 0, rec_mod_time: null },
    { employee_id: 5, employee_name: '伊藤 健太', employee_furigana: 'いとう けんた', dept_id: 5, position_id: 3, version: 0, rec_mod_time: null },
    { employee_id: 6, employee_name: '渡辺 真理', employee_furigana: 'わたなべ まり', dept_id: 7, position_id: 2, version: 0, rec_mod_time: null },
    { employee_id: 7, employee_name: '高橋 大輔', employee_furigana: 'たかはし だいすけ', dept_id: 6, position_id: 4, version: 0, rec_mod_time: null },
    { employee_id: 8, employee_name: '中村 彩', employee_furigana: 'なかむら あや', dept_id: 3, position_id: 4, version: 0, rec_mod_time: null },
];

export const departments: Department[] = [
    { dept_id: 1, dept_name: '開発部', dept_code: 100, parent_dept_id: 0, version: 0, rec_mod_time: null },
    { dept_id: 2, dept_name: '開発1課', dept_code: 110, parent_dept_id: 1, version: 0, rec_mod_time: null },
    { dept_id: 3, dept_name: '開発2課', dept_code: 120, parent_dept_id: 1, version: 0, rec_mod_time: null },
    { dept_id: 4, dept_name: '開発3課', dept_code: 130, parent_dept_id: 1, version: 0, rec_mod_time: null },
    { dept_id: 5, dept_name: 'インフラ課', dept_code: 140, parent_dept_id: 1, version: 0, rec_mod_time: null },
    { dept_id: 6, dept_name: 'セキュリティ課', dept_code: 150, parent_dept_id: 1, version: 0, rec_mod_time: null },
    { dept_id: 7, dept_name: '企画部', dept_code: 200, parent_dept_id: 0, version: 0, rec_mod_time: null },
];

export const positions: Position[] = [
    { position_id: 1, position_name: '部長', position_grade: 1, version: 0, rec_mod_time: null },
    { position_id: 2, position_name: '課長', position_grade: 2, version: 0, rec_mod_time: null },
    { position_id: 3, position_name: '主任', position_grade: 3, version: 0, rec_mod_time: null },
    { position_id: 4, position_name: '一般社員', position_grade: 4, version: 0, rec_mod_time: null },
];

// 資格取得記録のサンプルデータ
export const qualeRecords: QualeRecord[] = [
    { employee_qual_id: 1, employee_id: 1, qual_id: 2, acquisition_date: new Date('2022-04-15'), version: 0, rec_mod_time: null },
    { employee_qual_id: 2, employee_id: 1, qual_id: 24, acquisition_date: new Date('2023-06-20'), version: 0, rec_mod_time: null },
    { employee_qual_id: 3, employee_id: 2, qual_id: 1, acquisition_date: new Date('2021-11-10'), version: 0, rec_mod_time: null },
    { employee_qual_id: 4, employee_id: 2, qual_id: 19, acquisition_date: new Date('2023-03-05'), version: 0, rec_mod_time: null },
    { employee_qual_id: 5, employee_id: 3, qual_id: 3, acquisition_date: new Date('2020-09-15'), version: 0, rec_mod_time: null },
    { employee_qual_id: 6, employee_id: 3, qual_id: 8, acquisition_date: new Date('2021-12-01'), version: 0, rec_mod_time: null },
    { employee_qual_id: 7, employee_id: 3, qual_id: 26, acquisition_date: new Date('2023-07-10'), version: 0, rec_mod_time: null },
    { employee_qual_id: 8, employee_id: 4, qual_id: 21, acquisition_date: new Date('2023-02-20'), version: 0, rec_mod_time: null },
    { employee_qual_id: 9, employee_id: 4, qual_id: 30, acquisition_date: new Date('2022-08-15'), version: 0, rec_mod_time: null },
    { employee_qual_id: 10, employee_id: 5, qual_id: 7, acquisition_date: new Date('2021-05-25'), version: 0, rec_mod_time: null },
    { employee_qual_id: 11, employee_id: 5, qual_id: 23, acquisition_date: new Date('2022-10-30'), version: 0, rec_mod_time: null },
    { employee_qual_id: 12, employee_id: 6, qual_id: 6, acquisition_date: new Date('2020-06-18'), version: 0, rec_mod_time: null },
    { employee_qual_id: 13, employee_id: 6, qual_id: 34, acquisition_date: new Date('2019-03-12'), version: 0, rec_mod_time: null },
    { employee_qual_id: 14, employee_id: 7, qual_id: 4, acquisition_date: new Date('2022-11-08'), version: 0, rec_mod_time: null },
    { employee_qual_id: 15, employee_id: 7, qual_id: 14, acquisition_date: new Date('2021-09-22'), version: 0, rec_mod_time: null },
    { employee_qual_id: 16, employee_id: 8, qual_id: 1, acquisition_date: new Date('2022-01-15'), version: 0, rec_mod_time: null },
    { employee_qual_id: 17, employee_id: 8, qual_id: 2, acquisition_date: new Date('2023-05-20'), version: 0, rec_mod_time: null },
];