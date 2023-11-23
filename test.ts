import { describe, expect, test } from "vitest";
import {
    getBorderBox,
    getContentBox,
    getElementBox,
    getMarginBox,
    getPaddingBox,
    getWindowBox,
} from "./index";

describe("element-box", () => {
    const div = document.createElement("div");

    test("getContentBox()", () => {
        expect(() => getContentBox(div)).not.toThrow();
    });

    test("getPaddingBox()", () => {
        expect(() => getPaddingBox(div)).not.toThrow();
    });

    test("getBorderBox()", () => {
        expect(() => getBorderBox(div)).not.toThrow();
    });

    test("getMarginBox()", () => {
        expect(() => getMarginBox(div)).not.toThrow();
    });

    test("getElementBox(), content-box", () => {
        expect(() =>
            getElementBox(div, {
                includeMargin: false,
                includeBorder: false,
                includePadding: false,
            }),
        ).not.toThrow();
    });

    test("getElementBox(), padding-box", () => {
        expect(() =>
            getElementBox(div, {
                includeMargin: false,
                includeBorder: false,
                includePadding: true,
            }),
        ).not.toThrow();
    });

    test("getElementBox(), border-box", () => {
        expect(() =>
            getElementBox(div, {
                includeMargin: false,
                includeBorder: true,
                includePadding: true,
            }),
        ).not.toThrow();
    });

    test("getElementBox(), margin-box", () => {
        expect(() =>
            getElementBox(div, {
                includeMargin: true,
                includeBorder: true,
                includePadding: true,
            }),
        ).not.toThrow();
    });

    test("getElementBox(), string", () => {
        expect(() => getElementBox(div, "border-box")).not.toThrow();
        expect(() => getElementBox(div, "content-box")).not.toThrow();
        expect(() => getElementBox(div, "padding-box")).not.toThrow();
        expect(() => getElementBox(div, "margin-box")).not.toThrow();
    });

    test("getWindowBox()", () => {
        expect(() => getWindowBox()).not.toThrow();
    });
});
