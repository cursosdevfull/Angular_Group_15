export class MatPaginatorIntlES {
  getRangeLabel(page: number, pageSize: number, length: number) {
    return `Página ${page + 1} de ${Math.ceil(length / pageSize)}`;
  }
}
