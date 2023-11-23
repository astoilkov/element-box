import getMarginBox from "./getMarginBox";
import getBorderBox from "./getBorderBox";
import getPaddingBox from "./getPaddingBox";
import getContentBox from "./getContentBox";

export type ElementBoxOptions =
    | "content-box"
    | {
          includeMargin: false;
          includeBorder: false;
          includePadding: false;
      }
    | "padding-box"
    | {
          includeMargin: false;
          includeBorder: false;
          includePadding: true;
      }
    | "border-box" // (what getBoundingClientRect() returns)
    | {
          includeMargin: false;
          includeBorder: true;
          includePadding: true;
      }
    | "margin-box"
    | {
          includeMargin: true;
          includeBorder: true;
          includePadding: true;
      };

export default function getElementBox(
    element: Element,
    options: ElementBoxOptions = "border-box",
) {
    const boxType =
        typeof options === "string"
            ? options
            : options.includeMargin === false &&
                options.includeBorder === false &&
                options.includePadding === false
              ? "content-box"
              : options.includeMargin === false &&
                  options.includeBorder === false &&
                  options.includePadding === true
                ? "padding-box"
                : options.includeMargin === false &&
                    options.includeBorder === true &&
                    options.includePadding === true
                  ? "border-box"
                  : options.includeMargin === true &&
                      options.includeBorder === true &&
                      options.includePadding === true
                    ? "margin-box"
                    : "border-box";

    if (boxType === "content-box") {
        return getContentBox(element);
    } else if (boxType === "padding-box") {
        return getPaddingBox(element);
    } else if (boxType === "border-box") {
        return getBorderBox(element);
    } else if (boxType === "margin-box") {
        return getMarginBox(element);
    }

    return getBorderBox(element);
}
