import sanitizeHtml from 'sanitize-html';

function sanitize(dirtyHtml: string): string {
  return sanitizeHtml(dirtyHtml,{
    allowedAttributes:{
        '*': ['class']
    }
  })
}

export default sanitize;
