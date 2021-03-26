import {IComment} from './comment';

export interface INote {
  id: string;
  title: string;
  content: string;
  comments: IComment[];
}
