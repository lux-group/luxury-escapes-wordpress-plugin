export const truncateText = text =>
  text.length > 23 ? text.substring(0, 20) + "..." : text;
