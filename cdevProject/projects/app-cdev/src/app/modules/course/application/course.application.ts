import { Inject, Injectable } from '@angular/core';

import { CoursePort } from '../domain/ports/course.port';
import { CourseAdapter } from '../infrastructure/course.adapter';

@Injectable()
export class CourseApplication {
  constructor(@Inject(CourseAdapter) private readonly coursePort: CoursePort) {}

  listByPage(page: number, limit: number) {
    return this.coursePort.listByPage(page, limit);
  }
}
