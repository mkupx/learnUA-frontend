import { useLoading } from "../context/LoadingContext";

export default function GlobalLoader() {
  const { loading } = useLoading();
  if (!loading) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <span className="loading loading-bars loading-xl"></span>
    </div>
  );
}