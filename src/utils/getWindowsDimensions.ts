export function getWindowDimensions() {
  if (typeof window !== 'undefined') {
    const { innerWidth: width } = window;
    return {
      width
    };
  }

  return { width: 0 };
}
