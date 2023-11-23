export default function getBorderBox(element: Element): DOMRect {
    return element.getBoundingClientRect();
}
