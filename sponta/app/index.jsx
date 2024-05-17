import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

import {images} from '../constants';
import CustomButton from './components/CustomButton';

export default function App() {
  return (
     <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle= {{ height: '100%' }}>
        <View className="w-full justify-center 
        items-center h-[85vh] px-4"> 
   
          <Image 
          source={images.cards} 
          className="max-w--[380px] w-full h-[300px] left-3" 
          resizeMode='contain'
          />    
          <View className="relative-mt-5">
            <Text className="text-3xl text-white font-bold text-center">  Discover 
            food and events with <Text className="text-secondary-200">Sponta
            </Text>
            </Text>

            <Image source={images.path} className="w-[100px] -bottom-6 -right-0 absolute" 
            resizeMode='contain'/>
            
            
          </View>
          <CustomButton 
          title="Get Started"
          handlePress={() => router.push('/sign-in')} 
            containerStyles="w-full"
          
          />
        </View>
        
      </ScrollView>
      <StatusBar backgroundColor="161622" style='light' />
    </SafeAreaView>
  );
}

