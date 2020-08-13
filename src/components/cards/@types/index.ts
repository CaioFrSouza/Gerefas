import { FunctionTypeNode } from 'typescript'

export interface RemoveListProps {
    list?:any[],
    setList?:Function,
    id?:number
}

export interface DefaultCardsProps {
    title:string,
    description:string,
    id?:number,

    removeFunction?: Function 
}