import { classnames } from "@/utils/helpers";

type IProps = {
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "danger" | "success";
};

const spinnerSize = {
  small: "h-4 w-4",
  medium: "h-6 w-6",
  large: "h-8 w-8",
};

const spinnerColor = {
  primary: "border-blue-500",
  secondary: "border-gray-500",
  danger: "border-red-500",
  success: "border-green-500",
};

const Spinner = ({ size = "small", color = "secondary" }: IProps) => {
  return (
    <div
      className={classnames(
        spinnerColor[color],
        spinnerSize[size],
        "inline-block animate-spin rounded-full border-2 border-solid border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
      )}
      role="status"
    ></div>
  );
};

export default Spinner;
