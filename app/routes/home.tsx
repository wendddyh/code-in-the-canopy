import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Code In The Canopy" },
    { name: "description", content: "Welcome to Code In The Canopy" },
  ];
}

export default function Home() {
  return <Welcome />;
}
