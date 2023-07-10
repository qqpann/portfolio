import { useState } from 'react'

type Picture = {
  z: number
}
const seriesA: Picture[] = [
  { z: 10 },
  { z: 20 },
  { z: 30 },
  { z: 40 },
  { z: 50 },
  { z: 60 },
  { z: 70 },
  { z: 80 },
  { z: 90 },
]
const seriesB: Picture[] = [
  { z: 4 },
  { z: 8 },
  { z: 12 },
  { z: 16 },
  { z: 20 },
  { z: 24 },
  { z: 28 },
  { z: 32 },
  { z: 36 },
  { z: 40 },
  { z: 44 },
  { z: 48 },
  { z: 52 },
  { z: 56 },
  { z: 60 },
  { z: 64 },
]

export default function Demo() {
  // 0 ~ 100
  const [scrollLocation, setScrollLocation] = useState(50)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setScrollLocation(parseInt(e.target.value))
  }
  const nearestA = seriesA.reduce((prev, curr) => {
    return Math.abs(curr.z - scrollLocation) < Math.abs(prev.z - scrollLocation)
      ? curr
      : prev
  })
  const nearestB = seriesB.reduce((prev, curr) => {
    return Math.abs(curr.z - scrollLocation) < Math.abs(prev.z - scrollLocation)
      ? curr
      : prev
  })
  console.log(nearestA, nearestB)

  return (
    <div className="">
      <span className="absolute font-mono">
        ScrollLocation: {scrollLocation}; Code:{' '}
        <a
          href="https://github.com/qqpann/portfolio/blob/main/web/pages/scroll-sync-demo.tsx"
          target="_blank"
        >
          https://github.com/qqpann/portfolio/blob/main/web/pages/scroll-sync-demo.tsx
        </a>
      </span>
      <div>
        {seriesA.map((p, i) => (
          <div
            className={
              'w-16 h-1 absolute ' +
              (p.z == nearestA.z ? 'bg-red-500' : 'bg-white')
            }
            style={{ left: '100px', top: `${100 + p.z * 3}px` }}
            key={i}
          />
        ))}
      </div>
      <input
        type="range"
        min="1"
        max="100"
        value={scrollLocation}
        onChange={onChange}
        className="slider rotate-90 absolute ml-[-150px] w-[300px]"
        style={{ left: '180px', top: '240px' }}
      />
      <div>
        {seriesB.map((p, i) => (
          <div
            className={
              'w-16 h-1 absolute ' +
              (p.z == nearestB.z ? 'bg-red-500' : 'bg-white')
            }
            style={{ left: '200px', top: `${100 + p.z * 3}px` }}
            key={i}
          />
        ))}
      </div>
    </div>
  )
}
