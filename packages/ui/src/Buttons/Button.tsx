import * as React from "react";
import { ButtonType } from "./types";

interface propsButton {
  title: String;
  type?: String;
}

export const Button = ({ title, type }: propsButton) => {
  let color = "";
  let textColor = "ui-text-black";
  let hoverColor = "";

  switch (type) {
    case ButtonType.Primary:
      color = "ui-bg-primary-500";
      hoverColor = "hover:ui-bg-primary-400";
      break;
    case ButtonType.Secondary:
      color = "ui-bg-secondary-500";
      textColor = "ui-text-white";
      hoverColor = "hover:ui-bg-secondary-400";
      break;
    case ButtonType.Tertiary:
      color = "ui-bg-tertiary-500";
      hoverColor = "hover:ui-bg-tertiary-400";
      break;
    case ButtonType.Succes:
      color = "ui-bg-success-500";
      hoverColor = "hover:ui-bg-success-400";
      break;
    case ButtonType.Warning:
      color = "ui-bg-warning-500";
      hoverColor = "hover:ui-bg-warning-400";
      break;
    case ButtonType.Error:
      color = "ui-bg-error-500";
      hoverColor = "hover:ui-bg-error-400";
      break;
    default:
      color = "ui-bg-primary-500";
      hoverColor = "hover:ui-bg-primary-400";
      break;
  }

  return (
    <div className="ui-rounded-2xl">
      <button>
        <div
          className={`ui-flex ui-w-full ui-items-center ui-justify-center ui-rounded-full ui-border ui-border-transparent ui-px-8 ui-py-3 ui-text-base ui-font-medium ui-no-underline ${color} ${textColor} ${hoverColor} md:ui-py-3 md:ui-px-10 md:ui-text-lg md:ui-leading-6`}
        >
          {title}
          <span className="ui-ml-2 ui-bg-gradient-to-r ui-from-surface-500 ui-to-surface-900 ui-bg-clip-text ui-text-transparent">
            →
          </span>
        </div>
      </button>
    </div>
  );
};
