const { writeReactComponent, readSourceFile } = require("../../../utils");
const { del } = require("../../callbacks-simpleMDReact");
const { replaceMarkdown } = require("../../../helpers");
const { REGEXP_DEL } = require("../../constantsMDReact");

const outFolder = "src/parserMDReact/tests/_generated";

describe("testing lists-only", () => {
  it("renders lists-only", () => {
    let markdown = readSourceFile("src/parserMDReact/tests/del/content.md");
    let parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(parsedContent, REGEXP_DEL, del);

    const fileName = "Del.js";
    writeReactComponent(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});