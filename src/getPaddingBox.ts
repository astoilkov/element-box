export default function getPaddingBox(element: Element): DOMRect {
    const clientRect = element.getBoundingClientRect();
    const computedStyle = getComputedStyle(element);
    return new DOMRect(
        clientRect.x + Number.parseFloat(computedStyle.borderLeftWidth),
        clientRect.y + Number.parseFloat(computedStyle.borderTopWidth),

        clientRect.width -
            Number.parseFloat(computedStyle.borderLeftWidth) -
            Number.parseFloat(computedStyle.borderRightWidth),

        clientRect.height -
            Number.parseFloat(computedStyle.borderTopWidth) -
            Number.parseFloat(computedStyle.borderBottomWidth),
    );
}
