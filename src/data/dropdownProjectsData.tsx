import { VariantType } from "components/atoms/ProgressBar";

export type DropdownProjectType = {
  name: string;
  percentage: number;
  color: VariantType;
};

export const dropdownProjectsData: DropdownProjectType[] = [
  { name: "mobile development", percentage: 20, color: "blue" },
  { name: "deploy github project", percentage: 50, color: "green" },
  { name: "customer development", percentage: 70, color: "red" },
  { name: "database backup", percentage: 100, color: "pink" },
  { name: "release v2", percentage: 20, color: "yellow" },
];
