import sanitizeHtml from 'sanitize-html';

function sanitize(dirtyHtml: string): string {
  return sanitizeHtml(dirtyHtml,{
    allowedClasses: {
        '*': ['*']
    }
  })
}

export default sanitize;
