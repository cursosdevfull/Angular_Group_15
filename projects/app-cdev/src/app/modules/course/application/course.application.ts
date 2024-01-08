import { Inject, Injectable } from '@angular/core';

import { Course } from '../domain/course';
import { CoursePort } from '../domain/ports/course.port';
import { CourseAdapter } from '../infrastructure/course.adapter';

@Injectable()
export class CourseApplication {
  constructor(@Inject(CourseAdapter) private readonly coursePort: CoursePort) {}

  listByPage(page: number, limit: number) {
    return this.coursePort.listByPage(page, limit);
  }

  delete(id: string) {
    return this.coursePort.delete(id);
  }

  getAll() {
    return this.coursePort.getAll();
  }

  update(course: Course) {
    return this.coursePort.update(course);
  }

  insert(course: Course) {
    return this.coursePort.insert(course);
  }
}
