import { FC } from 'react'
import Button from '../button'
import styles from './section.header.module.scss'

interface SectionHeaderProps {

  title: string
  subtitle: string
  buttonLabel: string

}

export const SectionHeader: FC<SectionHeaderProps> = ({

  title,
  subtitle,
  buttonLabel

}) => {

  return (

    <div className=  { styles.header }>

      <div className = { styles.title }>

        { title } <br/>

        <span className = { styles.subTitle }>

          { subtitle }

        </span>

      </div>
      
      <Button 

        label = { buttonLabel } 
        variant = "outline" 

      />

    </div>
  )
}