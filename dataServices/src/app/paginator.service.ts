export class MatPaginatorIntl {
  getRangeLabel(page: number, pageSize: number, length: number) {
    return `${page * pageSize + 1} - ${
      page * pageSize + pageSize
    } of ${length}`;
  }
}
