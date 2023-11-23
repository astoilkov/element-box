export default function getWindowBox(): DOMRect {
    return new DOMRect(0, 0, window.innerWidth, window.innerHeight);
}
