export interface ThreadListProps {
  getSearchableUser: (searchStr: string) => void;
  clearSearchableUser: () => void;
  setIsEmpty: (isEmpty: boolean) => void
}

export interface ThreadListState {
  search: string
}
