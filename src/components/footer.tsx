import { Icon } from "@/components/icon";
import { site } from "@/data/content";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
      <p>
        © {new Date().getFullYear()} {site.name}
      </p>
      <p className="flex items-center gap-1.5">
        <Icon name="pin" className="h-3.5 w-3.5" />
        {site.location}
      </p>
    </footer>
  );
}
