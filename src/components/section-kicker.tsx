import { Icon, type IconName } from "@/components/icon";

export function SectionKicker({
  index,
  icon,
  label,
  invert = false,
}: {
  index: string;
  icon: IconName;
  label: string;
  invert?: boolean;
}) {
  return (
    <p className={`label tracking-[0.12em] sm:tracking-[0.18em] ${invert ? "text-white/70" : ""}`}>
      <span className={`mono text-[11px] ${invert ? "text-accent-2" : "text-accent"}`}>{index}</span>
      <span className={`h-px w-6 ${invert ? "bg-white/30" : "bg-line"}`} />
      <Icon name={icon} className="h-4 w-4" />
      {label}
    </p>
  );
}
