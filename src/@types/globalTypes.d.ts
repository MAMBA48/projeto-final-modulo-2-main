type dashboardTypeData = {
  token: string
  icon: string
  doctor: number
  contractor: number
  total: number
  available: number
  unavailable: number
}
type plansTypeData = {
  token: string
  enabled: boolean
  id: number
  period: string
  planTitle: string
  type?: null
  values: number
}
type PaginationType = {
  pageable: {
    pageNumber: number
    pageSize: number
    sort: {
      empty: boolean
      unsorted: boolean
      sorted: boolean
    }
    offset: number
    paged: boolean
    unpaged: boolean
  }
  last: {
    totalPages: number
    totalElements: number
    size: number
    number: number
    sort: {
      empty: boolean
      unsorted: boolean
      sorted: boolean
    }
    first: boolean
    numberOfElements: number
    empty: boolean
  }
}
