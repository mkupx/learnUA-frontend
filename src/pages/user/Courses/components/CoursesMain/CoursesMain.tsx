import { useState } from "react";
import CoursesMy from "./components/CoursesCreated";
import CoursesNow from "./components/CoursesNow";

export default function CoursesMain() {
  const [activeTab, setActiveTab] = useState("my");

  return (
    <main className="min-h-screen bg-base-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Мої курси</h1>

      <div className="w-full max-w-4xl mx-auto">
        <div role="tablist" className="tabs tabs-box">
          <a
            role="tab"
            className={`tab ${activeTab === "my" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("my")}
          >
            Мої курси
          </a>
          <a
            role="tab"
            className={`tab ${activeTab === "enrolled" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("enrolled")}
          >
            Проходжу зараз
          </a>
        </div>

        <div className="grid gap-4">
          {activeTab === "my" && <CoursesMy />}

          {activeTab === "enrolled" && <CoursesNow />}
        </div>
      </div>
    </main>
  );
}
