import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerWebLink = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WebLink, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Title: string;
  readonly URL: string;
  readonly announcementID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyWebLink = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<WebLink, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Title: string;
  readonly URL: string;
  readonly announcementID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type WebLink = LazyLoading extends LazyLoadingDisabled ? EagerWebLink : LazyWebLink

export declare const WebLink: (new (init: ModelInit<WebLink>) => WebLink) & {
  copyOf(source: WebLink, mutator: (draft: MutableModel<WebLink>) => MutableModel<WebLink> | void): WebLink;
}

type EagerAnnouncement = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Announcement, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Title: string;
  readonly Body: string;
  readonly WebLinks?: (WebLink | null)[] | null;
  readonly instructorID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAnnouncement = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Announcement, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Title: string;
  readonly Body: string;
  readonly WebLinks: AsyncCollection<WebLink>;
  readonly instructorID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Announcement = LazyLoading extends LazyLoadingDisabled ? EagerAnnouncement : LazyAnnouncement

export declare const Announcement: (new (init: ModelInit<Announcement>) => Announcement) & {
  copyOf(source: Announcement, mutator: (draft: MutableModel<Announcement>) => MutableModel<Announcement> | void): Announcement;
}

type EagerInstructor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Instructor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Email: string;
  readonly Announcements?: (Announcement | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInstructor = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Instructor, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Email: string;
  readonly Announcements: AsyncCollection<Announcement>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Instructor = LazyLoading extends LazyLoadingDisabled ? EagerInstructor : LazyInstructor

export declare const Instructor: (new (init: ModelInit<Instructor>) => Instructor) & {
  copyOf(source: Instructor, mutator: (draft: MutableModel<Instructor>) => MutableModel<Instructor> | void): Instructor;
}