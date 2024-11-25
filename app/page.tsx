"use client"

import { MapComponent } from "./_map/map";
import { people } from "./_groups/messages";
import { cn } from "@/lib/utils"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useState } from "react";
import { Avatar } from "./_groups/Avatar";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function Home() {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <div className="font-[family-name:var(--font-geist-sans)] relative">
      <Sidebar selected={selected} setSelected={setSelected} />
      <MapComponent highlighted={selected && people[selected].group} />
      <DisplayCard selected={selected} setSelected={setSelected} />
    </div>
  );
}

function Sidebar({ selected, setSelected }: { 
  selected: number | null, 
  setSelected: (index: number | null) => void },
) {
  return (
    <div className={cn(
      "absolute w-96 h-[94vh] top-[3vh] left-[3vh]",
      "z-30 bg-white/60 backdrop-blur-sm",
      "rounded-md border border-slate-100",
      "text-slate-900 text-md",
      "grid grid-rows-[1fr,auto]"
    )}>
      <div className="overflow-y-auto p-8">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Contributor List</h2>
        {people.map((person, i) => (
          <button className={cn(
            "w-full text-left leading-8",
            "hover:bg-slate-200",
            i === selected ? "font-bold" : "",
            selected && i !== selected ? "text-slate-400" : "",
          )} key={person.name}
          onClick={() => {
            if (selected === i) setSelected(null)
            else setSelected(i)
          }}
          >
            <h2>{person.name}</h2>
          </button>
        ))}
      </div>
      <div className="p-8 border-t border-slate-50">
        <h2 className="text-3xl font-bold tracking-tight leading-10">Wheels of Joy</h2>
        <p>
          Wheels of Joy is a charitable initiative designed to provide
          underprivileged children with bicycles, opening up a world
          of adventure, freedom, and opportunity. This project is driven by
          the belief that every child should be able to experience the joy
          of riding their bike around with their friends.
        </p>

      </div>
    </div>
  )
}

function DisplayCard({ selected, setSelected }: { 
  selected: number | null,
  setSelected: (index: number | null) => void,
}) {
  if (selected == null) return null
  const person = people[selected]
  return ( 
    <Card className={cn(
      "absolute w-96 right-[3vh] bottom-[3vh]",
      "z-30 bg-white/60 backdrop-blur-sm",
      "rounded-md border border-slate-100",
      "w-96",
    )}>
      <Button 
        className="absolute top-4 right-4" variant="ghost" size="icon"
        onClick={() => setSelected(null)}
      > <X size={24} /> </Button>
      <CardHeader>
        <Avatar seed={person.name} type="person" className="h-48 w-48 bg-blend-multiply" />
        <CardTitle className="text-2xl">{person.name}</CardTitle>
        <CardDescription>Distance: {person.distance}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{person.message}</p>
      </CardContent>
      <CardFooter>
        <div>
          <h3 className="text-lg font-medium tracking-tight leading-6">My Advice</h3>
          <p>{person.advice}</p>
        </div>
      </CardFooter>
    </Card>
  )
}