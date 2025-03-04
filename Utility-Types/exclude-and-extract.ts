// geralmente usamos o Extract e Exclude em tipos literais

import { User } from "./utility-models";

// Extract<Type, Union> Extrair tipos de uma união de tipos
type AppEvents = "click" | "hover" | "scroll" | "resize" | { name: string };

type MarketingEvents = Extract<
  AppEvents,
  "click" | "scroll" | { name: string } | User
>;

const event: MarketingEvents = {name: "Fabricio"};

// Exclude<UnionType, ExcludedMembers>
type UserRoles = "admin" | "editor" | "viewer" | "guest";

type ViewCommentsRoles = Exclude<UserRoles, "guest">;



type Singers = "Will Smith" | "Vanessa Camargo" | "Joel Santana" | {name: string} | User

type SelectOscar = Exclude<Singers, "Will Smith" | "Vanessa Camargo">


const singers: SelectOscar = {
  name: "Fabricio",
}

const user: SelectOscar = "Joel Santana"