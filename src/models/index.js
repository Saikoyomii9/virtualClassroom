// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { WebLink, Announcement, Instructor } = initSchema(schema);

export {
  WebLink,
  Announcement,
  Instructor
};