import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterChipProps {
  label: string;
  value: string;
  onClick?: () => void;
  active?: boolean;
  className?: string;
}

const FilterChip = ({ label, value, onClick, active, className }: FilterChipProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2.5 text-sm transition-all hover:shadow-md hover:border-primary/30 focus:outline-none focus:ring-2 focus:ring-ring/20",
        active && "border-primary/40 shadow-sm",
        className
      )}
    >
      <span className="text-muted-foreground text-xs font-medium uppercase tracking-wide">{label}</span>
      <span className="font-semibold text-card-foreground">{value}</span>
      <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
    </button>
  );
};

export default FilterChip;
