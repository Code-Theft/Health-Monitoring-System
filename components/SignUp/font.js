import { useFonts } from 'expo-font';

//Poppins Font
export const [fontsLoaded] = useFonts({
    'Plight': require('../../assets/fonts/Poppins-Light.ttf'),
    'Pregular': require('../../assets/fonts/Poppins-Regular.ttf'),
    'Pmed': require('../../assets/fonts/Poppins-Medium.ttf'),
});

