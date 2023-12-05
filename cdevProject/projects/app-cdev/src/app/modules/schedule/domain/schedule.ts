export class Price {
  readonly PEN: number;
  readonly USD: number;
}

export enum TYPE_COURSE {
  NORMAL = 'NORMAL',
  PRO = 'PRO',
}

export enum STATUS_SCHEDULE {
  PUBLISHED = 'PUBLISHED',
  DRAFT = 'DRAFT',
}

export enum FREQUENCY {
  SUNDAY = 'SUNDAY',
  MONDAY = 'MONDAY',
  TUESDAY = 'TUESDAY',
  WEDNESDAY = 'WEDNESDAY',
  THURSDAY = 'THURSDAY',
  FRIDAY = 'FRIDAY',
  SATURDAY = 'SATURDAY',
}

export interface ScheduleEssentials {
  readonly id: string;
  readonly title: string;
  readonly image: string;
  readonly type: TYPE_COURSE;
  readonly summary: string;
  readonly slogan: string;
  readonly prices: Price;
  readonly dateStart: Date;
  readonly hourStart: Date;
  readonly hourEnd: Date;
  readonly duration: number;
  readonly frequency: FREQUENCY;
  readonly courseId: string;
  readonly teacherId: string;
}

export interface ScheduleOptionals {
  readonly status: STATUS_SCHEDULE;
  readonly whatLearn: string[];
  readonly requirements: string[];
  readonly content: string[];
}

export type ScheduleProperties = ScheduleEssentials &
  Partial<ScheduleOptionals>;

export class Schedule {
  private readonly id: string;
  private title: string;
  private image: string;
  private type: string;
  private summary: string;
  private slogan: string;
  private prices: { [key: string]: number };
  private dateStart: Date;
  private hourStart: Date;
  private hourEnd: Date;
  private duration: number;
  private frequency: string;
  private status: string;
  private whatLearn: string[];
  private requeriments: string[];
  private content: string[];
  private courseId: string;
  private teacherId: string;

  constructor(props: ScheduleProperties) {
    Object.assign(this, props);
  }
}
