export default function getContentBox(element: Element): DOMRect {
    const clientRect = element.getBoundingClientRect();
    const computedStyle = getComputedStyle(element);
    return new DOMRect(
        clientRect.x +
            Number.parseFloat(computedStyle.borderLeftWidth) +
            Number.parseFloat(computedStyle.paddingLeft),
        clientRect.y +
            Number.parseFloat(computedStyle.borderTopWidth) +
            Number.parseFloat(computedStyle.paddingTop),
        clientRect.width -
            Number.parseFloat(computedStyle.borderLeftWidth) -
            Number.parseFloat(computedStyle.borderRightWidth) -
            Number.parseFloat(computedStyle.paddingLeft) -
            Number.parseFloat(computedStyle.paddingRight),
        clientRect.height -
            Number.parseFloat(computedStyle.borderTopWidth) -
            Number.parseFloat(computedStyle.borderBottomWidth) -
            Number.parseFloat(computedStyle.paddingTop) -
            Number.parseFloat(computedStyle.paddingBottom),
    );
}
