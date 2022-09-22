import { useCallback, useState } from "react";
import { GoAlert } from "react-icons/go";

export default function NotificationFail() {
  const [display, setDisplay] = useState("");

  const handleOnClick = useCallback(() => {
    setDisplay("hidden");
  }, []);

  return (
    <div className={`notification-fail ${display} `} onClick={handleOnClick}>
      <div className="flex items-center space-x-3">
        <GoAlert color="white" />
        <p>Hubo un error al enviar la consulta</p>
      </div>
    </div>
  );
}
