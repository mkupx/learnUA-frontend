import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold">LearnUA — українська платформа онлайн-курсів</h1>
          <p className="py-6">Вчися новому, розвивай навички та отримуй сертифікати, не виходячи з дому. Якісні курси від провідних експертів для твого професійного та особистого зростання.</p>
          <Link to="/profile">
            <button className="btn btn-primary">Переглянути курси</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export { Hero };