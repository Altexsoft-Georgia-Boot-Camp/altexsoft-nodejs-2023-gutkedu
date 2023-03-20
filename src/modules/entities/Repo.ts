import { Entity, Schema } from "redis-om";

export interface RepoEntity {
  repo: string;
  owner: string;
  counter: number;
}

export class RepoEntity extends Entity {}

export const RepoSchema = new Schema(RepoEntity, {
  repo: { type: "string" },
  owner: { type: "string" },
  counter: { type: "number" },
});
