export const ArrayUtils = {
  filterEmptyItems: (arr: any[]) => {
    return arr.filter((item) => Boolean(item))
  },
} as const
