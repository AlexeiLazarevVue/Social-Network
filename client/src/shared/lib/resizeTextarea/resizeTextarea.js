export const resizeTextarea = (event) => {
  const textarea = event.target;
  textarea.style.cssText = `height: auto;`
  textarea.style.cssText = `height: ${textarea.scrollHeight}px;`
}