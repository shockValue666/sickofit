import * as React from 'react';



export enum HairColor {
    Blonde = "Your hair is blonde",
    Brown="Your hair is brown",
    Pink = "Your hair is pink"
}

export interface Props {
    name?:string;
    age?:number;
    email?:string;
    getName?: (name: string) => string;
    hairColor?:HairColor
}


export function Person (props: Props) {
    const [country,setCountry] = React.useState<string>("")
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>

      <input type="text" placeholder='write your country' onChange={(e:React.ChangeEvent<HTMLInputElement>) =>setCountry(e.target.value)}/>
      {country}
      <h2>{HairColor.Pink}</h2>
    </div>
  );
}
