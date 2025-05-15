import { FC } from 'react'
import styles from './text.module.scss'

interface TextProps {

  title: string
  subtitle: string

}

export const Text: FC<TextProps> = ({

  title,
  subtitle

}) => {

  return (

    <div className=  { styles.root }>

        <div className = { styles.title }>

            { title }

        
        </div>

        <div className = { styles.subTitle }>

            { subtitle }

        </div>

      

    </div>
  )
}