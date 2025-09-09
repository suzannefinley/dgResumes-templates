export default function SectionHeader({ label }: { label: string }) {
  return (
    <h3 className="bg-blue-500 w-3/4 pl-4 py-2  ml-5 rounded-2xl font-semibold tracking-widest text-white border-spacing-2 border-blue-900 shadow-lg uppercase">
      {label}
    </h3>
  );
}
