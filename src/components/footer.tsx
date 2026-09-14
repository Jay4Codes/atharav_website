import { site } from "@/data/content";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <p>
        © {new Date().getFullYear()} {site.name}
      </p>
      <p>{site.location}</p>
    </footer>
  );
}
