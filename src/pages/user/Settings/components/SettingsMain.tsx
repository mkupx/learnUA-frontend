
import "../Settings.scss";
import SettingsForm from "./SettingsForm/SettingsForm";

const SettingsMain = () => {

  return (
    <div className=" settings-main flex-1 bg-base-200 flex items-start justify-start">
      <div className="w-full rounded-md bg-base-100 shadow-accent-content p-8">
        <h2 className="text-2xl font-bold mb-6">Налаштування профілю</h2>
        <SettingsForm />
      </div>
    </div>
  );
  
};

export default SettingsMain;