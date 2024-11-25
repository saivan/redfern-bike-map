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
import { useState } from "react"
import { Avatar } from "./_groups/Avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, X } from "lucide-react"
import Image from "next/image"



export default function Home() {
  const [selected, setSelected] = useState<number | null>(null)
  const [open, setOpen] = useState(true)
  return (
    <div className="font-[family-name:var(--font-geist-sans)] relative">
      <Sidebar selected={selected} setSelected={setSelected} open={open} setOpen={setOpen} />
      <MapComponent highlighted={selected && people[selected].group} />
      <DisplayCard selected={selected} setSelected={setSelected} />
    </div>
  )
}


function Sidebar({ selected, setSelected, open, setOpen }: { 
  open: boolean,
  setOpen: (open: boolean) => void,
  selected: number | null, 
  setSelected: (index: number | null) => void },
) {
  return (<>
    <Button className={cn( "absolute top-14 left-14 z-[100]",)}
    variant="outline" size="icon" onClick={() => setOpen(!open)}
  > <ChevronLeft size={24} 
    className={cn(
      "transition-transform duration-300 ease-in-out",
      open === true ? "rotate-0" : "rotate-180",
    )}
  /> </Button>
    <div className={cn(
      "absolute sm:w-96 w-[88vw] h-[calc(100vh-3rem)] sm:h-[94vh] top-6 left-6",
      "z-30 bg-white/60 backdrop-blur-sm",
      "rounded-md border border-slate-100",
      "text-slate-900 text-md",
      "grid grid-rows-[1fr,auto]",
      "transition-transform duration-300 ease-in-out",
      open === true ? "translate-x-0" : "translate-x-[-140%]",
      selected !== null && "<sm:translate-x-[-140%]",
    )}>
      <div className="p-8 pt-20 border-b border-slate-50">
        <h2 className="text-3xl font-bold tracking-tight leading-10">
          Follow That Dream
        </h2>
        <p className="text-sm">
          Follow that dream is a charitable initiative spreading happiness and 
          opportunity. Each child receives a brand-new bike, unlocking 
          adventure, freedom, and the chance to follow that dream. We believe 
          every child deserves the joy of exploring freely and chasing their dreams!
        </p>
        <p className="text-xs text-slate-600 font-light mt-2">
          Never see a need without doing something about it<br/>
          - Mary Mackillop
        </p>
      </div>
      <div className="overflow-y-auto p-8">
        <h2 className="text-2xl font-bold tracking-tight mb-4">Contributor List</h2>
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
    </div>
  </>)
}


function DisplayCard({ selected, setSelected }: { 
  selected: number | null,
  setSelected: (index: number | null) => void,
}) {
  if (selected == null) return null
  const person = people[selected]
  return ( 
    <Card className={cn(
      "absolute w-96 right-[3vh] bottom-[8vh] sm:bottom-[6vh]",
      "z-30 bg-white/60 backdrop-blur-sm",
      "rounded-md border border-slate-100",
      "w-96 max-w-[84vw]",
    )}>
      <Button 
        className="absolute top-4 right-4" variant="ghost" size="icon"
        onClick={() => setSelected(null)}
      > <X size={24} /> </Button>
      <CardHeader>
        <Avatar seed={person.name} type="person" className="h-48 w-48 bg-blend-multiply" />
        <CardTitle className="text-2xl">{person.name}</CardTitle>
        <CardDescription>Distance: {person.distance} 
          <a href="https://www.strava.com/activities/11234640358?utm_source=ios_share&utm_medium=social&share_sig=9958C0381732384047">
            <Image src="/strava.png" alt="Strava" width={84} height={24} />
          </a>
        </CardDescription>
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
