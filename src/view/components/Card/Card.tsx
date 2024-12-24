import { ComponentProps } from 'react'

interface CardProps extends ComponentProps<'div'> {
  name: string
  image: string
  id: string
}

export function Card({ name, image, id }: CardProps) {
  return (
    <div
      className="bg-white h-50 w-60 rounded-xl text-center flex items-center justify-center flex-col"
      id={id}
      data-testid="card-container"
    >
      <img
        src={image}
        className="h-50 w-50 object-cover rounded-tr-xl rounded-t-xl"
        data-testid="card-image"
      />
      <div className="text-md font-bold my-2">{name}</div>
    </div>
  )
}
