import { toast } from "react-hot-toast";

export type ToastType = "success" | "error" | "info" | "warning";

interface ToastOptions {
  type?: ToastType;
  message: string;
  duration?: number; // Duration in milliseconds (optional)
}

export const showToast = ({ type = "info", message, duration = 3000 }: ToastOptions) => {
  const baseOptions = {
    duration,
  };

  switch (type) {
    case "success":
      toast.success(message, baseOptions);
      break;
    case "error":
      toast.error(message, baseOptions);
      break;
    case "warning":
      toast(message, { ...baseOptions, icon: "⚠️", style: { background: "#f59e0b", color: "#fff" } });
      break;
    case "info":
    default:
      toast(message, baseOptions);
      break;
  }
};