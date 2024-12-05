import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

interface TableFilterProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  ariaLabel: string;
}

export const TableFilter: React.FC<TableFilterProps> = ({
  value,
  onChange,
  placeholder,
  ariaLabel,
}) => {
  return (
    <div className="relative flex-grow mb-2">
      <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-8 text-sm"
        aria-label={ariaLabel}
      />
      <X
        className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground cursor-pointer"
        onClick={() => onChange("")}
      />
    </div>
  );
};
