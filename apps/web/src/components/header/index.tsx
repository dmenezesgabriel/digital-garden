import Link from "next/link";

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link className="text-2xl" href="/">
          GM
        </Link>
      </div>
    </div>
  );
}
