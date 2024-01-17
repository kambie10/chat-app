import { View, Text, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const PageContainer = ({ children }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : ''}
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: COLORS.white
      }}
    >
      {children}
    </KeyboardAvoidingView>
  )
}

export default PageContainer