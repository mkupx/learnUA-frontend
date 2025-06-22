import Header from "@/shared/components/Header/Header";
import Footer from "@/shared/components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { InfoIcon, SectionIcon, DeleteIcon } from "./icons";
import { useLocation, Link } from "react-router-dom";

function EditCourse() {
  const location = useLocation();

  const isInfoActive = location.pathname.endsWith("/info");
  const isSectionsActive = location.pathname.endsWith("/sections");


  const containerClass = "flex min-h-[93vh] pt-8 pb-8 bg-base-200 justify-center";
  const cardClass = "flex w-full max-w-7xl shadow-lg rounded-lg bg-base-100 overflow-hidden";
  const asideClass = "w-74 bg-base-100 p-6 border-r border-base-300 flex flex-col";
  const navClass = "flex flex-col gap-3";
  const infoBtnClass = `btn btn-ghost justify-start gap-2 text-base${
    isInfoActive ? " bg-base-300" : ""
  }`;
  const sectionBtnClass = `btn btn-ghost justify-start gap-2 text-base${
    isSectionsActive ? " bg-base-300" : ""
  }`;
  const deleteBtnClass = "btn btn-outline btn-error justify-start gap-2 text-base mt-4";
  const mainClass = "flex-1 p-10 bg-base-50";
  const headingClass = "text-3xl font-bold mb-6 text-base-content";
  const contentClass = "bg-base-100 rounded-lg shadow p-6";


  return (
    <>
      <Header />
      <div className={containerClass}>
        <div className={cardClass}>
          <aside className={asideClass}>
            <nav className={navClass}>
              <Link className={infoBtnClass} to="info" state={{ from: location }}>
                <InfoIcon />
                Основна інформація
              </Link>
              <Link className={sectionBtnClass} to="sections" state={{ from: location }}>
                <SectionIcon />
                Секції
              </Link>
              <button className={deleteBtnClass}>
                <DeleteIcon />
                Видалити курс
              </button>
            </nav>
          </aside>
          <main className={mainClass}>
            <h1 className={headingClass}>Панель керування курсом</h1>
            <div className={contentClass}>
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
