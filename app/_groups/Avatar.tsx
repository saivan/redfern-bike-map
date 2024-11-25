
import { createAvatar } from '@dicebear/core'
import { shapes, lorelei } from '@dicebear/collection'
import { cn } from '@/lib/utils'

export function Avatar (props: { 
  type?: 'person' | 'group'
  className?: string
  seed: string 
}) {
  const collection = props.type === 'group' ? shapes : lorelei
  const avatar = createAvatar(collection, { 
    randomizeIds: true,
    seed: props.seed, 
  })
  const svg = avatar.toString()
  return <div 
      className={cn(props.className, "rounded overflow-hidden")} 
      dangerouslySetInnerHTML={{ __html: svg }} 
      />
}
