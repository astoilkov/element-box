export default function getMarginBox(element: Element): DOMRect {
    const clientRect = element.getBoundingClientRect();
    const computedStyle = getComputedStyle(element);
    return new DOMRect(
        clientRect.x - Number.parseFloat(computedStyle.marginLeft),
        clientRect.y - Number.parseFloat(computedStyle.marginTop),
        clientRect.width +
            Number.parseFloat(computedStyle.marginLeft) +
            Number.parseFloat(computedStyle.marginRight),
        clientRect.height +
            Number.parseFloat(computedStyle.marginTop) +
            Number.parseFloat(computedStyle.marginBottom),
    );
}
