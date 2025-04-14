import "./MyLabel.css";

interface Props{
    /** 
    *Text to display */
    label:string;
    size?:'h1'|'h2' |'h3' |'normal'
    allCaps?:boolean;
    color?:'text-primary'|'text-secondary'|'text-tertiary'
    fontColor?:string
    /**
     * allCaps:boolean,
     * color:'text-primary'|'text-secondary'|'text-tertiary',
     * fontColor?:string
     */
}

export const MyLabel = ({label="Hola mundo",size="normal",allCaps=false,color,fontColor}:Props) => {
  return (
    <span
    style={{color:fontColor ?fontColor:""}}
     className={`${size} ${color}`}>{allCaps ? label.toLocaleUpperCase() :label}</span>
  )
}
