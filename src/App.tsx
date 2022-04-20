import { useState } from "react";
import { Card } from "./components/Card/Card";

const App = () => {
  const [role, setRole] = useState("");

  return (
    <div className="flex w-full justify-center items-center h-screen bg-red-400">
      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
        <Card
          title="Frontend Developer"
          body="VueJS, ReactJS, AngularJS, TailwindCSS"
        />
        <Card
          title="Backend Developer"
          body="Laravel, Django, ExpressJS, Springboot"
        />
        <Card title="Quality Assurance" body="WebDriveIO, Selenium, Cucumbar" />
        <Card title="UI/UX Design" body="AdobeXD, Figma, Inkscape" />
      </div>
    </div>
  );
};

export default App;
