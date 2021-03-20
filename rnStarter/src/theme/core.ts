import { StyleSheetProperties } from 'react-native'
import { Theme } from 'react-native-paper/lib/typescript/types'

type IStylesFunc = (theme: Theme) => StyleSheetProperties
type IStyles = StyleSheetProperties | IStylesFunc

const makeStyles = (styles: IStyles) => {
  if (typeof styles === 'function') {
  }
  return (props: any) => {
    return {}
  }
}
