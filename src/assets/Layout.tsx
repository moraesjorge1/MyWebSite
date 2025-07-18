export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <main className="flex-1 p-8 bg-blue-50 min-h-screen">
        {children}
      </main>
    </div>
  );
}