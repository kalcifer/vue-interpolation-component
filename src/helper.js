export function generateChildren(regexp, content, matcherFn) {
  let match;
  const children = [];
  let lastIdx = 0;

  while ((match = regexp.exec(content)) !== null) {
    const slotName = match[match.length - 1];
    if (match.index !== 0) {
      children.push(content.substring(lastIdx, match.index));
    }
    children.push(matcherFn(slotName));
    lastIdx = regexp.lastIndex;
  }
  if (lastIdx) {
    if (lastIdx !== content.length) {
      children.push(content.substring(lastIdx));
    }
  } else {
    children.push(content);
  }
  return children;
}
