export enum EContactStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
}

export interface IContact {
  name: string;
  email: string;
  phoneNumber: string;
  budget: string;
  primaryGoal: string;
  timeline: string;
  message: string;
  status: EContactStatus;
  createdAt?: Date;
  updatedAt?: Date;
}
