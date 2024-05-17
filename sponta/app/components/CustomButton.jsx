import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.7}
        className={`bg-secondary-200 w-full py-4 rounded-lg mt-5 ${containerStyles} ${isLoading ? 'opacity-50' :''}`}>
      <Text className={`text-white text-center font-bold ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton