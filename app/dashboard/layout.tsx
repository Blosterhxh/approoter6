export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row bg-white">
      <div className="flex w-64 flex-none items-stretch min-h-screen">
        <div className="w-full bg-[radial-gradient(#9ca3af_1px,_transparent_1px)] bg-[length:8px_8px]"></div>
      </div>

      <div className="flex-grow p-6">
        {children}
      </div>

      <div className="flex w-64 items-stretch flex-shrink-0 min-h-screen">
        <div className="w-full bg-[radial-gradient(#9ca3af_1px,_transparent_1px)] bg-[length:8px_8px]"></div>
      </div>
    </div>
  );
}
