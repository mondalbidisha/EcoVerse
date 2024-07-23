export interface Action {
  id: string;
  name: string;
  description: string;
  actionPoints: number;
  impactPoints: number;
  co2Saved: number;
  waterSaved: number;
  wasteSaved: number;
  categoryId: string;
}

export interface UserChallenge {
  id: string;
  userId: string;
  challengeId: string;
  joinedAt: Date;
  user?: User;
  challenge?: Challenge;
}

export interface ChallengeAction {
  id: string;
  actionId: string;
  challengeId: string;
  action: Action;
  challenge: Challenge;
}

export interface Challenge {
  id: string;
  name: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
  UserChallenges?: UserChallenge[];
  ChallengeActions?: ChallengeAction[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  details: string;
  profilePic?: string;
  password: string;
  creationDate?: Date;
  UserAction: UserAction[];
  // UserBadges    UserBadge[]
  UserChallenge?: UserChallenge[];

  totalUserActions: number;
  totalActionPoints: number;
  totalImpactPoints: number;
  totalCo2Saved: number;
  totalWaterSaved: number;
  totalWasteSaved: number;
}

export interface UserAction {
  id: string;
  name: string;
  impact: number;
  userId: string;
  actionId: string;
  logDate: Date;
  description: string;
  image?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}
