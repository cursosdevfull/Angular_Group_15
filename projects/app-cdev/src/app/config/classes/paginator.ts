import { MatPaginatorIntl } from '@angular/material/paginator';

export class Paginator extends MatPaginatorIntl {
  override itemsPerPageLabel = 'Registros por página';
  override nextPageLabel = 'Siguiente';
  override previousPageLabel = 'Anterior';
  override firstPageLabel = 'Primera página';
  override lastPageLabel = 'Última página';

  override getRangeLabel = (page: number, pageSize: number, length: number) => {
    const start = page * pageSize + 1;
    const end = (page + 1) * pageSize;
    return `${start} - ${end} de ${length}`;
  };
}
