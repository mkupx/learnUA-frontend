import Header from "@/shared/components/Header/Header";
import Footer from "@/shared/components/Footer/Footer";
import { Outlet } from "react-router-dom";

function EditCourse() {
  return (
    <>
      <Header />
      <div className="flex min-h-[93vh] pt-8 pb-8 bg-base-200 justify-center">
        <div className="flex w-full max-w-7xl shadow-lg rounded-lg bg-base-100 overflow-hidden">
          <aside className="w-74 bg-base-100 p-6 border-r border-base-300 flex flex-col">
            <nav className="flex flex-col gap-3">
              <a className="btn btn-ghost justify-start gap-2 text-base" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
                Основна інформація
              </a>
              <a className="btn btn-ghost justify-start gap-2 text-base" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                Секції
              </a>
              <a className="btn btn-outline btn-error justify-start gap-2 text-base mt-4" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Видалити курс
              </a>
            </nav>
          </aside>
          <main className="flex-1 p-10 bg-base-50">
            <h1 className="text-3xl font-bold mb-6 text-base-content">Панель керування курсом</h1>
            <div className="bg-base-100 rounded-lg shadow p-6">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EditCourse;
