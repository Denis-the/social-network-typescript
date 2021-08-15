export type Contact = string | null;

export type Photoes = {
  small: string | null;
  large: string | null;
};

export interface ProfileContacts {
  github: Contact;
  vk: Contact;
  facebook: Contact;
  instagram: Contact;
  twitter: Contact;
  website: Contact;
  youtube: Contact;
  mainLink: Contact;
}

export interface ProfileDetailed {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ProfileContacts;
  photos: Photoes;
}
