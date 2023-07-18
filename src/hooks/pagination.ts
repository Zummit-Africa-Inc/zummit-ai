import { useMemo } from "react"

const range = (start: number, end: number) => {
  let length = end - start + 1
  return Array.from({ length }, (_, idx) => idx + start)
}

export const DOTS = '...'

export const usePagination = (current: number, pageSize: number, siblingCount: number = 1, total: number) => {
    const pagination = useMemo(() => {
      const totalPageCount = Math.ceil(total / pageSize)
  
      const totalPageNumbers = siblingCount + 5
      if (totalPageNumbers >= totalPageCount) {
        return range(1, totalPageCount)
      }
      const leftSiblingIndex = Math.max(current - siblingCount, 1)
      const rightSiblingIndex = Math.min(
        current + siblingCount,
        totalPageCount
      )
  
      const shouldShowLeftDots = leftSiblingIndex > 2
      const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2
  
      const firstPageIndex = 1;
      const lastPageIndex = totalPageCount
  
      if (!shouldShowLeftDots && shouldShowRightDots) {
        let leftItemCount = 3 + 2 * siblingCount
        let leftRange = range(1, leftItemCount);
        return [...leftRange, DOTS, totalPageCount]
      }
  
      if (shouldShowLeftDots && !shouldShowRightDots) {
        let rightItemCount = 3 + 2 * siblingCount;
        let rightRange = range(
          totalPageCount - rightItemCount + 1,
          totalPageCount
        );
        return [firstPageIndex, DOTS, ...rightRange]
      }

      if (shouldShowLeftDots && shouldShowRightDots) {
        let middleRange = range(leftSiblingIndex, rightSiblingIndex)
        return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
      }
    }, [total, pageSize, siblingCount, current])
  
    return pagination
  }