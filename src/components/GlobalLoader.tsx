
export default function GlobalLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <span className="loading loading-bars loading-xl"></span>
    </div>
  );
}