import Link from "next/link";

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    width={24}
    height={24}
    aria-hidden="true"
    viewBox="0 0 20 20"
  >
    <path d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06z" />
  </svg>
);

const CTA_Btn = ({
  label,
  className,
  href,
}: {
  label: string;
  className?: string;
  href: string;
}) => {
  return (
    <Link
      className={`flex items-center gap-2 w-fit capitalize px-4 py-2 text-white rounded-full bg-gradient-to-r from-[#156FF5] via-[#087EE1] to-[#05E8BA] hover:bg-gradient-to-l ${className}`}
      href={href}
    >
      {label}
      <ArrowIcon />
    </Link>
  );
};

export default CTA_Btn;
