import { validate } from 'uuid';

export class Course {
  private readonly id: string;
  private title: string;
  private slug: string;

  constructor(id: string, title: string, slug?: string) {
    if (!validate(id)) throw new Error('Invalid id');
    if (title.length < 10) throw new Error('Invalid title');
    if (slug && slug.length < 10) throw new Error('Invalid slug');

    this.id = id;
    this.title = title;
    if (slug) this.slug = slug;
  }

  properties() {
    return {
      id: this.id,
      title: this.title,
      slug: this.slug,
    };
  }
}
