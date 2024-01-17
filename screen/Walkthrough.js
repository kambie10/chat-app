import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PageContainer from '../components/PageContainer'
import { FONTS, SIZES, images } from '../constants'

const Walkthrough = () => {
  return (
    <SafeAreaView>
      <PageContainer>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            marginHorizontal: 22,
          }}
        >
          <Image
            source={images.illustration}
            style={{
              width: SIZES.width * 0.7,
              height: SIZES.width * 0.7,
              marginVertical: 48
            }}
          />
          <Text
            style={{
              ...(SIZES.width <= 360  ?
                { ...FONTS.h2} :
                { ...FONTS.h1}),
              textAlign: 'center',
              marginHorizontal: SIZES.padding * 0.8
            }}
          >
            Connect easily with your family and friends over countries
          </Text>
        </View>
      </PageContainer>
    </SafeAreaView>
  )
}

export default Walkthrough