const { REGEXP_LINK } = require('atherdon-newsletter-constants');
const { write, readSourceFile } = require('../../../../utils');
const { link } = require('../../../../callbacks-simple');
const { replaceMarkdown } = require('../../../../helpers');

const outFolder = 'src/tests/_generated';

describe('testing link/exclamation-mark', () => {
  it('renders link/exclamation-mark', () => {
    const markdown = readSourceFile('src/tests/link/exclamation-mark/content.md');
    const parsedContent = {
      content: markdown,
    };

    replaceMarkdown.call(
      parsedContent,
      REGEXP_LINK,
      link,
    );

    const fileName = 'exclamation-mark.html';
    write(fileName, parsedContent.content, outFolder);
    expect(1).toBe(1);
  });
});