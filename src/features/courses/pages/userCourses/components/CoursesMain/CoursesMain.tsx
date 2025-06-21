import { useState } from "react";
import CoursesMy from "../CoursesCreated/CoursesCreated"; 
import CoursesNow from "../CoursesNow";

export default function CoursesMain() {
  // стан табу (активний таб "Мої курси" або "Проходжу зараз")
  const [activeTab, setActiveTab] = useState("my");

  return (
    <main className="min-h-screen bg-base-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Мої курси</h1>

      <div className="w-full max-w-4xl mx-auto">
        <div role="tablist" className="tabs tabs-box">
        {/* таб "Мої курси" */}
          <a
            role="tab"
            className={`tab ${activeTab === "my" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("my")}
          >
            Створені курси
          </a>
          {/* таб "Проходжу зараз" */}
          <a
            role="tab"
            className={`tab ${activeTab === "enrolled" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("enrolled")}
          >
            Проходжу зараз
          </a>
        </div>

        {/* контент табу */}
        <div className="grid gap-4">
          {/* контент табу "Мої курси" */}
          {activeTab === "my" && <CoursesMy />}

          {/* контент табу "Проходжу зараз" */}
          {activeTab === "enrolled" && <CoursesNow />}
        </div>
      </div>
    </main>
  );
}
