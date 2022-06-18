
export function isMobile() {
  // WARN: Super naive mobile device check.
  // we're using it on low-stake checks, where failing to detect some browsers is not a big deal.
  // If you need more specificity you may want to change this implementation.
  const navigator = window.navigator

  return (
    !!navigator &&
    (/Mobi/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent))
  )
}

export function ellipseAddress(
    address: string = "",
    width: number = 4
    ): string {
    return `${address.slice(0, width + 2)}...${address.slice(-width)}`;
}
