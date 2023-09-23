import React from 'react'
import { StyleProp, TextStyle } from "react-native"
import { EasingFunction } from "react-native-reanimated"

export interface Props {
  animateToNumber: number
  fontStyle?: StyleProp<TextStyle>
  animationDuration?: number
  includeComma?: boolean
  easing?: EasingFunction
}

declare const AnimatedNumber: React.FunctionComponent<Props>

export default AnimatedNumber
