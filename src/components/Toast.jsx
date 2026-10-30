import { useShop } from "../context/ShopContext";

import "./Toast.css";

function Toast() {
  const { toast } = useShop();

  if (!toast.show) {
    return null;
  }

  return (
    <div className="toast">
      <span className="toast-icon">✓</span>

      <span className="toast-message">
        {toast.message}
      </span>
    </div>
  );
}

export default Toast;