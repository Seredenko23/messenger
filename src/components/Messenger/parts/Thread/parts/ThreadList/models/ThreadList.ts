export interface ThreadListProps {
  subscribeSearchableUser: () => void;
  getSearchableUser: (searchStr: string) => void;
  clearSearchableUser: () => void;
  setIsEmpty: (isEmpty: boolean) => void
}

export interface ThreadListState {
  search: string
}
